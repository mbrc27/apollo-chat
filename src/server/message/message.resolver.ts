import { User } from "../user/user.model";

type Message = {
    id: string,
    text: string,
    createdAt: string,
    user: User,
};

const MessageResolver = {
    Query: {
        messages: async (_, args, { models }): Promise<Message[]> => {
            return await models.Message.find();
        },
        message: async (_, { id }, { models }): Promise<Message> => {
            return await models.Message.findOne(id);
        },
    }
};

export default MessageResolver;
