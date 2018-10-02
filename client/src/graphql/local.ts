import { UserState } from '../features/user';
import { ChannelState } from '../features/channel';


export const clientState = {
    defaults: {
       ...UserState.defaults,
       ...ChannelState.defaults,
    },
    resolvers: {
        Query: {
            ...UserState.resolvers.Query,
            ...ChannelState.resolvers.Query,
        },
    },
};

