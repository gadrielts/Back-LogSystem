import { Router } from 'express';

const LogsRouter = Router();

LogsRouter.get('/all');
LogsRouter.get('/:logId');
LogsRouter.get('/download/:logId');

LogsRouter.delete('/:logId');
LogsRouter.delete('/all');

export default LogsRouter;
