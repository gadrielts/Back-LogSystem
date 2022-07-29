import { Router } from 'express';

const UsersRouter = Router();

UsersRouter.get('/:id');
UsersRouter.post('/login');
UsersRouter.put('/create');
UsersRouter.patch('/edit/:id');
UsersRouter.delete('/delete/:id');

export default UsersRouter;
