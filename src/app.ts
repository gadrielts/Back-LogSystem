import express from 'express';
import https from 'https';
import path from 'path';

import Routes from './routes';

const port = process.env.PORT;
const app = express();

const server = https.createServer(
  {
    cert: path.resolve(__dirname, 'ssl', 'cert.pem'),
    key: path.resolve(__dirname, 'ssl', 'privkey.pem'),
  },
  app,
);

app.use(express.json());
app.use(Routes);

server.listen(port, () => console.log('Server started in port: ' + port));
