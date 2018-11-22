import { Prisma } from 'prisma-binding';

export const db = new Prisma({
    typeDefs: './src/database/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    debug: process.env.NODE_ENV !== 'production',
});

export default db;
