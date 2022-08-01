import express from 'express';
//import https from 'https';
//import fs from 'fs';

import { connect } from './database';
import Routes from './routes';

const port = process.env.PORT;
const app = express();
connect();

app.use(express.json());
app.use(Routes);

/** if you want to use an https server, here is a recommendation.
 * const options = {
 *  cert: fs.readFileSync('./src/ssl/cert.pem'),
 *  key: fs.readFileSync('./src/ssl/privkey.pem'),
 * };
 *
 * const server = https.createServer(options, app);
 * server.listen(port, () => console.log('Server started in port: ' + port));
 */

// the default being used is HTTP. If you don't want to use it, just delete it.
app.listen(port, () => console.log('Server started in port: ' + port));
