import { combineResolvers } from 'apollo-resolvers';
import userResolver from '../user/user.resolver';

export default combineResolvers([
    userResolver,
]);
