import ApolloClient from 'apollo-boost';

import { clientState } from './local';

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  clientState,
});
