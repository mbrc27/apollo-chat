import { IResolvers } from "graphql-tools";

const users = [{
    id: '1',
    username: 'Spanky',
    email: 'spanki@wp.pl',
    role: 'admin',
}];

type User = {
    id: string,
    username: string,
    email: string,
    role: string,
};

const UserResolver = {
    Query: {
        users: async (): Promise<User[]> => {
            return users;
        },
        user: async (): Promise<User> => {
            return users[0];
        },
    },
};

export default UserResolver;
