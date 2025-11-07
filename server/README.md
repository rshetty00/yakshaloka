# Other Arts Admin Server Setup

This optional Express server provides:
- Persistent storage for the curated YouTube list
- Admin authentication for management features
- Optional sync across devices/browsers

## Quick Start

### 1. Install Dependencies

```bash
npm install express cors
```

### 2. Set Admin Credentials

Edit the `.env` file in the project root and set your own credentials:

```
ADMIN_USER=yourusername
ADMIN_PASS=yourSecurePassword
```

### 3. Start the Server

```bash
node server/index.js
```

The server will run at `http://localhost:4000`.

### 4. Login to Admin Panel

1. Open your site: http://localhost:3001/other-arts
2. Scroll to the bottom → "Management & Settings" section
3. Click **"Admin login"**
4. Enter your credentials from `.env`:
   - Username: `yourusername`
   - Password: `yourSecurePassword`
5. Click **Submit**

You'll now see admin controls to add/edit/delete videos.

## Features

- **GET /api/other-arts** — Fetch the curated list (no auth required)
- **POST /api/other-arts** — Save the list (requires Basic Auth)
- **POST /api/admin-auth** — Validate admin credentials

## Admin Session

- Session is stored in `sessionStorage` (lasts until browser tab closes)
- Click "Logout" to clear the session
- Credentials are validated server-side on each login

## Data Storage

Curated URLs are saved to: `server/data/other-arts.json`

## Log File

All server console output is also written (appended) to: `server/logs/server.log`

View latest lines in PowerShell:

```powershell
Get-Content -Path server/logs/server.log -Tail 50 -Wait
```

Or open the file directly in your editor. The server creates the directory/file automatically on first start.

## Security Notes

- `.env` file is gitignored — keep your credentials private
- For production: use environment variables in your hosting platform (Heroku, Vercel, etc.)
- Consider adding HTTPS and rate limiting for public deployments

## Multiple Admins

To add more users, edit `server/index.js` and replace the single user check with a map of valid users. See main README or ask for help!
