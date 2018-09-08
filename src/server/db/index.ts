import "reflect-metadata";
import { createConnection } from "typeorm";
import { getRepository } from 'typeorm';

import { User } from '../user/user.model';
import { Message } from '../message/message.model';

import { createUsersWithMessages } from './seeds';

//TODO change strings
export const syncDatabase = async (recreate = false) => {
    const entities = {
        User,
        Message,
    };

    const connection = await createConnection({
        type: "postgres",
        host: process.env.NODE_ENV === 'test' ? 'localhost' : 'postgres',
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.NODE_ENV == 'test' ? 'testdb' : process.env.DATABASE,
        entities: Object.values(entities),
        synchronize: true,
        logging: false
    });

    createUsersWithMessages(entities);

    return entities;
};
