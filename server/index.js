const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'other-arts.json');
// Setup basic file logging so you can inspect server output after the fact.
// Logs are appended to server/logs/server.log with timestamps.
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
  try { fs.mkdirSync(LOG_DIR, { recursive: true }); } catch (e) { /* ignore */ }
}
const LOG_FILE = path.join(LOG_DIR, 'server.log');
let logStream; 
try {
  logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
} catch (e) {
  // fallback: no file logging
}
['log','error','warn','info'].forEach(level => {
  const orig = console[level].bind(console);
  console[level] = (...args) => {
    orig(...args);
    if (logStream) {
      try {
        const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] ` + args.map(a => {
          if (typeof a === 'string') return a;
          try { return JSON.stringify(a); } catch (_) { return String(a); }
        }).join(' ') + '\n';
        logStream.write(line);
      } catch (_) { /* ignore logging errors */ }
    }
  };
});

app.use(cors());
app.use(express.json());

// Request logging middleware (method, path, status) for debugging 404/401 issues.
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log('[REQ]', req.method, req.originalUrl, '->', res.statusCode, `${Date.now()-start}ms`);
  });
  next();
});

// Basic Auth middleware for write operations. Configure ADMIN_USER and ADMIN_PASS env vars.
function requireBasicAuth(req, res, next) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;
  if (!user || !pass) return next(); // not configured — allow (dev convenience)

  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="OtherArts"');
    return res.status(401).json({ ok: false, error: 'Authentication required' });
  }
  const b64 = auth.slice(6);
  const decoded = Buffer.from(b64, 'base64').toString('utf8');
  const [u, p] = decoded.split(':');
  if (u === user && p === pass) return next();
  res.setHeader('WWW-Authenticate', 'Basic realm="OtherArts"');
  return res.status(401).json({ ok: false, error: 'Invalid credentials' });
}

function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    return [];
  }
}

function writeData(arr) {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to write data', err);
    return false;
  }
}

app.get('/api/other-arts', (req, res) => {
  const data = readData();
  res.json({ ok: true, data });
});

app.post('/api/other-arts', requireBasicAuth, (req, res) => {
  const body = req.body;
  if (!Array.isArray(body)) {
    return res.status(400).json({ ok: false, error: 'Expected an array of URLs' });
  }
  const saved = writeData(body.map(String));
  if (!saved) return res.status(500).json({ ok: false, error: 'Failed to write data' });
  res.json({ ok: true });
});

// Admin auth endpoint: validates Basic Auth against ADMIN_USER / ADMIN_PASS
app.post('/api/admin-auth', (req, res) => {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;
  // If not configured, allow by default for developer convenience
  if (!user || !pass) return res.json({ ok: true, note: 'no-admin-config' });

  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="OtherArts"');
    return res.status(401).json({ ok: false, error: 'Authentication required' });
  }
  const b64 = auth.slice(6);
  const decoded = Buffer.from(b64, 'base64').toString('utf8');
  const [u, p] = decoded.split(':');
  if (u === user && p === pass) return res.json({ ok: true });
  res.setHeader('WWW-Authenticate', 'Basic realm="OtherArts"');
  return res.status(401).json({ ok: false, error: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`OtherArts server listening on http://localhost:${PORT}`);
  console.log(`Admin credentials: ADMIN_USER=${process.env.ADMIN_USER ? '✓ set' : '✗ not set'}, ADMIN_PASS=${process.env.ADMIN_PASS ? '✓ set' : '✗ not set'}`);
  console.log(`Log file: ${LOG_FILE}`);
});
