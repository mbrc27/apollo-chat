import * as Hapi from 'hapi';
import { ApolloServer } from 'apollo-server-hapi';
import gql from 'graphql-tag';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';

console.log(process.env.NODE_ENV);

export const startServer = async (port: number | string) => {

    const server = new ApolloServer({
        playground: !!(process.env.NODE_ENV === 'development'),
        typeDefs: gql`${importSchema('./src/server/app/schema.graphql')}`,
        resolvers,
    });

    const app = new Hapi.Server({
        port: port || process.env.API_PORT,
    });

    await server.applyMiddleware({ app });

    await app.start();
    return { app, server };
};
