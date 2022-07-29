import { Request, Response } from 'express';

class AuthController {
  Register(req: Request, res: Response) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        error: 'No Content',
      });
    }

    // Return Service Create User
  }

  Login(req: Request, res: Response) {
    const { username, email, password } = req.body;
    const EmailOrUsername = username || email;

    if (!EmailOrUsername && !password) {
      return res.status(400).json({
        message: 'No Content',
      });
    }

    // Return Service Login
  }

  Edit(req: Request, res: Response) {
    const item = req.query.item as string;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    if (!item) {
      return res.status(400).json({
        message: 'No Item',
      });
    }

    const itens = ['email', 'username', 'password'];

    if (!itens.includes(item)) {
      return res.status(400).json({
        message: 'Invalid item',
      });
    }

    // Return Service Edit User
  }

  Delete(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    // Return Service Delete User
  }

  Perfil(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'No Id',
      });
    }

    // Return Service Get Data User
  }
}

export default new AuthController();
