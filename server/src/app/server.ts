import { Server, Request } from 'hapi';
import { ApolloServer } from 'apollo-server-hapi';
import gql from 'graphql-tag';
import { importSchema } from 'graphql-import';

import db from '../database';
import resolvers from './resolvers';
import { Prisma, User } from '../database/generated/prisma';
import { getStateUser } from '../authentication/authentication.helpers';

export interface Context {
    db: Prisma
    request: Request,
    me: User
    secret: string,
};

export const startServer = async (port: number | string) => {
    const server = new ApolloServer({
        playground: !!(process.env.NODE_ENV === 'development'),
        typeDefs: gql`${importSchema('./server/src/app/schema.graphql')}`,
        resolvers,
        context: async ({ request }: { request: Request }) => {
            return {
                request,
                db,
                me: await getStateUser(request),
                secret: process.env.SECRET,
            };
        },
    });

    const app = new Server({
        port: port || process.env.API_PORT,
    });

    await server.applyMiddleware({ app });

    await app.start();
    return { app, server };
};
