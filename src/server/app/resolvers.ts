import { combineResolvers } from 'apollo-resolvers';
import user from '../user/user.resolver';

export default combineResolvers([
    user,
]);
