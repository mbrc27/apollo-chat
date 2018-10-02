
const clientState = {
  defaults: {},
  resolvers: {
    Query: {},
    Mutation: {},
    Subscription: {},
  },
};

export const initializeClientState = () => {
  const req = require.context('../features', true, /\.local\.ts/);

  return req.keys().reduce((state, key) => {
    const local = req(key).default;
    const { defaults, resolvers: { Query, Mutation, Subscription } } = state;


    return {
      defaults: { ...defaults, ...local.defaults },
      resolvers: {
        Query: { ...Query, ...local.resolvers.Query },
        Mutation: { ...Mutation, ...local.resolvers.Mutation },
        Subscription: { ...Subscription, ...local.resolvers.Subscription },
      }
    };
  }, clientState);
};

