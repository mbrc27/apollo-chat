import { combineResolvers } from 'apollo-resolvers';
import userResolver from '../user/user.resolver';
import messageResolver from '../message/message.resolver';
import channelResolver from '../channel/channel.resolver';
import AuthenticationResolver from '../authentication/authentication.resolver';

export default combineResolvers([
    userResolver,
    messageResolver,
    channelResolver,
    AuthenticationResolver,
]);
