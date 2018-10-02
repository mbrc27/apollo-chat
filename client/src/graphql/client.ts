import ApolloClient from 'apollo-boost';

import { initializeClientState } from './local';

const clientState = initializeClientState();

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  clientState,
});
