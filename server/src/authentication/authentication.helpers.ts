import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Request } from 'hapi';

import { User } from "../database/generated/prisma";
import { AuthenticationError } from 'apollo-server';

export const generatePasswordHash = async (user: User): Promise<string> =>
    await bcrypt.hash(user.password, 10);

export const validatePassword = async (
    inputPassword: string,
    password: string,
): Promise<boolean> =>
    await bcrypt.compare(password, inputPassword);

export const createToken = async (
    user: User,
    secret: string,
    expiresIn = process.env.NODE_ENV === 'development' ? '1000d' : '30m',
): Promise<string> => {
    const { id, email, username, role } = user;

    return await jwt.sign({ id, email, username, role }, secret, {
        expiresIn,
    });
};

export const validateToken = async (token: string): Promise<string | object> =>
    await jwt.verify(token, process.env.SECRET || '');

export const getStateUser = async (req: Request): Promise<AuthenticationError | string | object> => {
    const token = req.headers['x-token'];
    try {
        return await validateToken(token);
    } catch (e) {
        return null;
    }
}
