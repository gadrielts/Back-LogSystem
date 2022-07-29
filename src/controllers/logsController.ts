import { Request, Response } from 'express';

class LogsController {
  LogsGet(req: Request, res: Response) {
    const { logId } = req.params;

    if (!logId) {
      // Return Service All Logs
    } else {
      // Return Service Log Id
    }
  }

  LogDownload(req: Request, res: Response) {
    const { logId } = req.params;

    if (!logId) {
      return res.status(400).json({
        message: 'No Log Id',
      });
    }

    // Return Service Log Download
  }

  LogsDelete(req: Request, res: Response) {
    const { logId } = req.params;

    if (!logId) {
      // Return Service Delete All Logs
    } else {
      // Return Service Delete Log Id
    }
  }
}

export default new LogsController();
