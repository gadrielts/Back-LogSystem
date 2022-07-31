import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const WordSecret = process.env.WORD_SECRET || 'password';

type PayLoadType = {
  id: string;
};

export default (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  const token = authToken.split(' ')[1];

  try {
    const sub = verify(token, WordSecret) as PayLoadType;

    req.Authenticated = sub.id;

    return next();
  } catch (err) {
    const { message } = err as Error;
    console.error(message);

    return res.status(401).json({ error: message });
  }
};
