import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

import prisma from '../database';

type UserType = {
  email: string;
  password: string;
  username: string;
};

type UserEditType = {
  email?: string;
  password?: string;
  username?: string;
};

class authService {
  private SecretWord: string;

  constructor() {
    this.SecretWord = process.env.WORD_SECRET || 'password';
  }

  async Register(data: UserType) {
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: data.email,
          },
          {
            username: data.username,
          },
        ],
      },
    });

    if (user) {
      throw new Error('There is already a user with that email and username');
    }

    data.password = hashSync(data.password, 10);

    user = await prisma.user.create({ data });

    return {
      type: 'create',
      message: 'User created successfully',
      user,
    };
  }

  async Login({ type, data }: { type: 'email' | 'username'; data: string }, password: string) {
    const user = await prisma.user.findUnique({
      where: { [type]: data },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (!compareSync(password, user.password)) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign({ id: user.user_id }, this.SecretWord, { expiresIn: '1d' });

    return {
      type: 'login',
      message: 'Logged in successfully',
      user,
      token,
    };
  }

  async Edit({ type, data }: { type: 'email' | 'username'; data: string }, options: UserEditType) {
    const user = await prisma.user.findUnique({
      where: { [type]: data },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const updateUser = await prisma.user.update({
      where: { user_id: user.user_id },
      data: {
        username: options.username || user.username,
        email: options.email || user.email,
        password: options.password ? hashSync(options.password, 10) : user.password,
      },
    });

    return {
      type: 'edit',
      message: 'User edited successfully',
      newUser: updateUser,
    };
  }

  async Delete({ type, data }: { type: 'email' | 'username'; data: string }) {
    const user = await prisma.user.findUnique({
      where: { [type]: data },
    });

    if (!user) {
      throw new Error('User not found');
    }

    await prisma.user.delete({
      where: { user_id: user.user_id },
    });

    return {
      type: 'delete',
      message: 'User deleted successfully',
    };
  }

  async Perfil({ type, data }: { type: 'email' | 'username'; data: string }) {
    const user = await prisma.user.findUnique({
      where: { [type]: data },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      type: 'perfil',
      message: 'Get user details successfully',
      user,
    };
  }
}

export default new authService();
