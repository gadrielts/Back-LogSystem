import express from 'express';
import https from 'https';
import path from 'path';

const port = process.env.PORT;

const app = express();

app.use(express.json());

const server = https.createServer({
  cert: path.resolve(__dirname, 'cert.pem'),
  key: path.resolve(__dirname, 'privkey.pem')
}, app);

server.listen(port, () => console.log('Server started in port: ' + port));