import fs from 'fs';

export default () => {
  const verifyExistsFolderLog = fs.existsSync('./logs');
  if (!verifyExistsFolderLog) fs.mkdirSync('./logs');

  const Logs = fs.readdirSync('./logs');

  const LogsEmpty = [];
  let amount = 30;

  for (let num = 0; num < Logs.length; num += 30) {
    const current = Logs.slice(num, amount);
    let position = num;
    amount += 30;

    const description = current.map((logs) => {
      return {
        position: ++position,
        logId: logs,
      };
    });

    LogsEmpty.push(description);
  }

  return LogsEmpty;
};
