import { CHANNELS_QUERY } from "./channel.queries";

const defaults = {
  currentChannel: {},
};

const resolvers = {
  Query: {},
  Mutation: {
    selectChannel: (_: any, { id }: any, { cache }: any) => {
      const channels = cache.readQuery({ query: CHANNELS_QUERY });
      return {
        ...channels.find((channel: any) => channel.id === id),
         __typename: 'currentChannel',
        };
    }
  }
};

export default {
  defaults,
  resolvers,
};
