import { GraphQLResolveInfo } from "graphql";
import { combineResolvers } from 'graphql-resolvers';

import { Context } from "../app/server";
import { Message, MessageConnection } from "../database/generated/prisma";
import { isAuthenticated } from "../authentication/authentication.resolver";

const MessageResolver = {
    Query: {
        messages: async (_, { cursor }, { db }: Context, info: GraphQLResolveInfo): Promise<MessageConnection> => {
            return await db.query.messagesConnection({
                after: cursor ? cursor : null,
                orderBy: 'createdAt_DESC',
            }, info);
        },
        message: async (_, { id }, { db }: Context, info: GraphQLResolveInfo): Promise<Message> => {
            return await db.query.message({ where: { id } }, info);
        },
    },
    Mutation: {
        createMessage: combineResolvers(
            isAuthenticated,
            async function (
                _,
                { text, channelId },
                { db, me }: Context,
                info: GraphQLResolveInfo,
            ) {
                return await db.mutation.createMessage({
                    data: {
                        text,
                        author: {
                            connect: {
                                id: me.id,
                            }
                        },
                        channel: {
                            connect: {
                                id: channelId,
                            }
                        }
                    }
                }, info);
            },
        ),
        deleteMessage: combineResolvers(
            isAuthenticated,
            async function (
                _,
                { id },
                { db }: Context,
                info: GraphQLResolveInfo,
            ) {
                await db.mutation.deleteMessage({
                    where: {
                        id,
                    }
                }, info);

                return true;
            },
        ),
        updateMessage: combineResolvers(
            isAuthenticated,
            async function (
                _,
                { id, text },
                { db }: Context,
                info: GraphQLResolveInfo,
            ) {
                return await db.mutation.updateMessage({
                    data: {
                        text,
                    },
                    where: {
                        id,
                    }
                }, info);
            }
        ),
    },
};

export default MessageResolver;
