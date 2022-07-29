import express from 'express';
import https from 'https';
import fs from 'fs';

import Routes from './routes';

const port = process.env.PORT;
const app = express();

const options = {
  cert: fs.readFileSync('./src/ssl/cert.pem'),
  key: fs.readFileSync('./src/ssl/privkey.pem'),
};

const server = https.createServer(options, app);

app.use(express.json());
app.use(Routes);

server.listen(port, () => console.log('Server started in port: ' + port));
