import { Router } from 'express';

import logsController from '../controllers/logsController';

const LogsRouter = Router();

LogsRouter.get('/all', logsController.LogsGet);
LogsRouter.get('/:logId', logsController.LogsGet);

LogsRouter.get('/download/:logId', logsController.LogDownload);

LogsRouter.delete('/all', logsController.LogsDelete);
LogsRouter.delete('/:logId', logsController.LogsDelete);

export default LogsRouter;
