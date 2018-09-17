import { GraphQLResolveInfo } from "graphql";
import { ForbiddenError, AuthenticationError, UserInputError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

import { Context } from "../app/server";
import { Message } from "../database/generated/prisma";
import { createToken, validatePassword } from "./authentication.helpers";

type Tokens = {
    accessToken: string,
    refreshToken: string,
};

const userWithTokenQuery = '{ id email username password role refreshToken { token } }';

export const isAuthenticated = (
    _, args,
    { me }: Context,
): ForbiddenError | null =>
    me ? skip : new ForbiddenError('User not authenticated');

export const isMessageOwner = async (
    _, args,
    { id }: Message,
    { db, me }: Context,
): Promise<ForbiddenError | null> => {
    const message = await db.query.message({
        where: { id },
    });

    if (message && message.id !== me.id) {
        throw new ForbiddenError('User is not a message owner');
    }

    return skip;
};

const AuthenticationResolver = {
    Mutation: {
        signUp: async (_, data, { db, secret }: Context): Promise<Tokens> => {
            const user = await db.mutation.createUser({ data }, userWithTokenQuery);

            return {
                accessToken: await createToken(user, secret),
                refreshToken: user.refreshToken.token,
            };
        },
        signIn: async (_, { email, password }, { db, secret }: Context): Promise<Tokens> => {
            const user = await db.query.user({ where: { email } }, userWithTokenQuery);

            if (!user) throw new UserInputError('No user found with this credentials');

            const isValid = await validatePassword(user.password, password);

            if (!isValid) throw new AuthenticationError('Invalid password');

            return {
                accessToken: await createToken(user, secret),
                refreshToken: user.refreshToken.token,
            };

        },
        getAccessToken: async (_, { refreshToken }, { db, secret, me }: Context) => {
            const user = await db.query.user({ where: { id: me.id } }, userWithTokenQuery);
            const isValid = user.refreshToken.token === refreshToken;

            if (!isValid) throw new AuthenticationError('Invalid refresh token');

            return {
                accessToken: await createToken(user, secret),
                refreshToken,
            };
        },
    },
};

export default AuthenticationResolver;
