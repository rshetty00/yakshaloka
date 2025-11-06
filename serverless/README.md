Serverless note: persisting Other Arts curated list

This project currently includes a small file-backed Express server at `server/index.js` which persists the curated list to `server/data/other-arts.json`.

If you want to deploy global persistence as a serverless function (Vercel/Netlify), note:

- Serverless functions are ephemeral and typically cannot rely on the local filesystem for durable storage.
- Recommended persistence options for serverless:
  - Use a hosted database (Firestore, Supabase, DynamoDB).
  - Use object storage (S3, DigitalOcean Spaces) to store the JSON file.
- Example approach (Netlify + S3):
  - Create a Netlify function that receives GET/POST and reads/writes to an S3 object (requires AWS credentials configured as Netlify env vars).
  - Alternatively use Supabase: function calls Supabase REST to read/write a JSON row.

Simple Netlify function sketch (pseudo):

```js
// netlify/functions/other-arts.js
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const obj = await s3.getObject({ Bucket: process.env.BUCKET, Key: 'other-arts.json' }).promise();
    return { statusCode: 200, body: obj.Body.toString('utf8') };
  }
  if (event.httpMethod === 'POST') {
    await s3.putObject({ Bucket: process.env.BUCKET, Key: 'other-arts.json', Body: event.body }).promise();
    return { statusCode: 200, body: 'OK' };
  }
  return { statusCode: 405 };
};
```

If you'd like, I can scaffold a ready-to-deploy Netlify or Vercel function and update the frontend `REACT_APP_OTHER_ARTS_SERVER` env var usage to point to the deployed URL.
