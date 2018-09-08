type User = {
    id: string,
    username: string,
    email: string,
    role: string,
};

const UserResolver = {
    Query: {
        users: async (_, args, { models }): Promise<User[]> => {
            return await models.User.find();
        },
        user: async (_, { id }, { models }): Promise<User> => {
            return await models.User.findOne(id);
        },
    },
};

export default UserResolver;
