import { Request, Response } from 'express';

import authService from '../services/authService';

class AuthController {
  async Register(req: Request, res: Response) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: 'No Content',
      });
    }

    // Return Service Create User
    try {
      const data = await authService.Register({ username, email, password });
      return res.status(201).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(400).json({
        message,
      });
    }
  }

  async Login(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const EmailOrUsername = username || email;

    if (!EmailOrUsername && !password) {
      return res.status(400).json({
        message: 'No Content',
      });
    }

    // Return Service Login

    try {
      const data = await authService.Login(
        {
          type: email ? 'email' : 'username',
          data: EmailOrUsername,
        },
        password,
      );

      return res.status(202).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(401).json({ message });
    }
  }

  async Edit(req: Request, res: Response) {
    const { email, username } = req.query as { email: string; username: string };
    const { newEmail, newPassword, newUsername } = req.body;
    const EmailOrUsername = email || username;

    if (!EmailOrUsername) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    // Return Service Edit User
    try {
      const data = await authService.Edit(
        {
          type: email ? 'email' : 'username',
          data: EmailOrUsername,
        },
        {
          email: newEmail,
          password: newPassword,
          username: newUsername,
        },
      );

      return res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(401).json({ message });
    }
  }

  async Delete(req: Request, res: Response) {
    const { email, username } = req.query as { email: string; username: string };
    const EmailOrUsername = email || username;

    if (!EmailOrUsername) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    // Return Service Delete User
    try {
      const data = await authService.Delete({
        type: email ? 'email' : 'username',
        data: EmailOrUsername,
      });

      return res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(401).json({ message });
    }
  }

  async Perfil(req: Request, res: Response) {
    const { email, username } = req.query as { email: string; username: string };
    const EmailOrUsername = email || username;

    if (!EmailOrUsername) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    // Return Service Get Data User
    try {
      const data = await authService.Perfil({
        type: email ? 'email' : 'username',
        data: EmailOrUsername,
      });

      res.status(200).json(data);
    } catch (err) {
      const { message } = err as Error;
      console.error(message);

      return res.status(401).json({ message });
    }
  }
}

export default new AuthController();
