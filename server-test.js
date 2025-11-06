const http = require('http');

function get(path) {
  return new Promise((resolve, reject) => {
    const req = http.request({ method: 'GET', host: 'localhost', port: 4000, path, agent: false }, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

function post(path, payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = http.request({ method: 'POST', host: 'localhost', port: 4000, path, headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }, agent: false }, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  try {
    console.log('GET /api/other-arts ...');
    const g = await get('/api/other-arts');
    console.log('GET status', g.status);
    try { console.log('GET body:', JSON.parse(g.body)); } catch(e) { console.log('GET body (raw):', g.body); }
  } catch (e) {
    console.error('GET error', e.message);
  }

  try {
    console.log('\nPOST /api/other-arts ...');
    const p = await post('/api/other-arts', ['https://example.com/node-test']);
    console.log('POST status', p.status);
    try { console.log('POST body:', JSON.parse(p.body)); } catch(e) { console.log('POST body (raw):', p.body); }
  } catch (e) {
    console.error('POST error', e.message);
  }
})();
