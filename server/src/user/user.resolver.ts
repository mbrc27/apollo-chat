import { GraphQLResolveInfo } from "graphql";

import { Context } from "../app/server";
import { User } from "../database/generated/prisma";

const UserResolver = {
    Query: {
        users: async (_, args, { db }: Context, info: GraphQLResolveInfo): Promise<User[]> => {
            return await db.query.users(null, info);
        },
        user: async (_, { id }, { db }: Context, info: GraphQLResolveInfo): Promise<User> => {
            return await db.query.user({ where: { id } }, info);
        },
        me:  async (_, args, { db, me }: Context, info: GraphQLResolveInfo): Promise<User> => {
            return await db.query.user({ where: { id: me.id } }, info);
        },
    },
};

export default UserResolver;
