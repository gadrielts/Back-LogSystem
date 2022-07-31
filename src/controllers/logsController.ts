import { Request, Response } from 'express';

import logsService from '../services/logsService';

class LogsController {
  async LogsGet(req: Request, res: Response) {
    const { logId } = req.params;

    // Return Service Get Log or All Logs
    try {
      const data = await logsService.LogsGet(logId);
      res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(400).json({ message });
    }
  }

  async LogDownload(req: Request, res: Response) {
    const { logId } = req.params;

    if (!logId) {
      return res.status(400).json({
        message: 'No Log Id',
      });
    }

    // Return Service Log Download
    try {
      const data = await logsService.LogDownload(logId);

      res.download(data.path);

      data.path = '';

      return res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(400).json({ message });
    }
  }

  async LogsDelete(req: Request, res: Response) {
    const { logId } = req.params;

    // Return Service Log Delete by Id or Log Delete All
    try {
      const data = await logsService.LogsDelete(logId);
      return res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(400).json({ message });
    }
  }
}

export default new LogsController();
