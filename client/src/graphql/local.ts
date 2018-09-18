import ApolloClient from 'apollo-boost';

import { UserState } from '../features/user';


const clientState = {
    defaults: {
       ...UserState.defaults,
    },
    resolvers: {
        Query: {
            ...UserState.resolvers.Query,
        },
    },
};

export const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    clientState,
});
