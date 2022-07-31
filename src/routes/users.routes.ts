import { Router } from 'express';

import authController from '../controllers/authController';
import ensureAuth from '../middlewares/ensureAuth';

const UsersRouter = Router();

UsersRouter.get('/perfil', ensureAuth, authController.Perfil);
UsersRouter.post('/login', authController.Login);
UsersRouter.put('/create', ensureAuth, authController.Register);
UsersRouter.patch('/edit', ensureAuth, authController.Edit);
UsersRouter.delete('/delete', ensureAuth, authController.Delete);

export default UsersRouter;
