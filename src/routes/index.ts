import { Router } from 'express';
import Cors, { CorsOptions } from 'cors';

import LogsRouter from './logs.routes';
import UsersRouter from './users.routes';

import ensureAuth from '../middlewares/ensureAuth';

const routes = Router();

const optionsCors = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Toke', 'Authorization'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: '*',
  preflightContinue: false,
} as CorsOptions;

routes.use(Cors(optionsCors));

routes.use('/logs', ensureAuth, LogsRouter);
routes.use('/users', UsersRouter);

export default routes;
