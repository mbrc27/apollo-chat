import { GraphQLResolveInfo } from "graphql";

import { Context } from "../app/server";
import { Channel } from "../database/generated/prisma";

const ChannelResolver = {
    Query: {
        channels: async (_, args, { db }: Context, info: GraphQLResolveInfo) => {
            return await db.query.channels(null, info);
        },
        channel: async (_, { id }, { db }: Context, info: GraphQLResolveInfo) => {
            return await db.query.channel({ where: { id } }, info);
        },
    },
    Mutation: {
        createChannel: async (_, { title }, { db }: Context, info: GraphQLResolveInfo) => {
            return await db.mutation.createChannel({
                data: { title },
            }, info);
        },
        deleteChannel: async (_, { id }, { db }: Context, info: GraphQLResolveInfo) => {
            await db.mutation.deleteChannel({
                where: { id },
            }, info);

            return true;
        },
        updateChannel: async (_, { id, title }, { db }: Context, info: GraphQLResolveInfo) => {
            return await db.mutation.updateChannel({
                data: { title },
                where: { id },
            }, info);
        },
    },
};

export default ChannelResolver;
