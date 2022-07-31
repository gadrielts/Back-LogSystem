import fs from 'fs';

import pageSystem from '../utils/pageSystem';

type LogType = {
  position: number;
  logId: string;
};

class logsService {
  private pageLog: LogType[][];
  private logs: LogType[];

  constructor() {
    this.pageLog = pageSystem();
    this.logs = this.pageLog.flat();
  }

  private findLog(logId: string) {
    const findLog = this.logs.find((log) => log.logId.replaceAll('.html', '') === logId);
    const data = fs.readFileSync(`./logs/${findLog?.logId}`, 'utf-8');

    return {
      findLog,
      data,
    };
  }

  LogsGet(logId: string | null) {
    if (logId) {
      const log = this.findLog(logId);

      if (!log.findLog) {
        throw new Error('Log not found');
      }

      return {
        type: 'log',
        message: 'Get log by Id',
        log: log.data,
      };
    }

    return {
      type: 'all-logs',
      message: 'All logs request successfully',
      logs: this.pageLog,
    };
  }

  async LogDownload(logId: string) {
    const log = this.findLog(logId);

    if (!log.findLog) {
      throw new Error('Log not found');
    }

    return {
      type: 'download-log',
      message: 'Download log sended successfully',
      path: `./logs/${log.findLog.logId}`,
    };
  }

  async LogsDelete(logId: string | null) {
    if (logId) {
      const log = this.findLog(logId);

      if (!log.findLog) {
        throw new Error('Log not found');
      }

      fs.unlinkSync(`./logs/${log.findLog.logId}`);

      return {
        type: 'delete-log',
        message: 'Delete log by Id successfully',
      };
    }

    await fs.rmSync('./logs');
    await fs.mkdirSync('./logs');

    return {
      type: 'delete-all-log',
      message: 'Delete all log successfully',
    };
  }
}

export default new logsService();
