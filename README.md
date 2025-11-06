# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Admin: local server credentials and usage

This project includes a small optional local server (`server/index.js`) that can persist the curated "Other Arts" list. The server supports Basic Auth for write operations when `ADMIN_USER` and `ADMIN_PASS` are set in the environment.

Quick development steps (PowerShell):

1. Temporary (current shell only):

```powershell
$env:ADMIN_USER = 'alice'
$env:ADMIN_PASS = 's3cret'
npm run server
```

2. Persistent (available in new shells):

```powershell
setx ADMIN_USER "alice"
setx ADMIN_PASS "s3cret"
# open a new PowerShell window and then:
npm run server
```

3. Test the admin-auth endpoint:

```powershell
#$user and $pass should match the values above
$user = 'alice'; $pass = 's3cret'
$b64 = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$user:$pass"))
Invoke-RestMethod -Uri 'http://localhost:4000/api/admin-auth' -Method Post -Headers @{ Authorization = "Basic $b64" }
```

Or with curl:

```powershell
curl -u alice:s3cret -X POST http://localhost:4000/api/admin-auth
```

4. Save curated list to server (example):

```powershell
Invoke-RestMethod -Uri 'http://localhost:4000/api/other-arts' -Method Post -Headers @{ Authorization = "Basic $b64"; 'Content-Type' = 'application/json' } -Body '["https://youtu.be/dQw4w9WgXcQ"]'
```

Notes:
- If `ADMIN_USER` / `ADMIN_PASS` are not set, the server will run in a developer-convenience mode and accept writes without authentication (it returns `{ ok: true, note: 'no-admin-config' }`).
- Do not commit or check credentials into source control. For production you should run the server behind HTTPS and replace Basic Auth with a more secure token-based flow.

