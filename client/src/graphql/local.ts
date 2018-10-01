import { UserState } from '../features/user';


export const clientState = {
    defaults: {
       ...UserState.defaults,
    },
    resolvers: {
        Query: {
            ...UserState.resolvers.Query,
        },
    },
};

