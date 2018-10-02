import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';

// import { Channels } from './__generated__/Channels';

export const CHANNELS_QUERY = gql`
  query Channels {
    channels {
      id
      title
    }
  }
`;
// export class ChannelQuery extends Query<Channels>{ }
export const SELECT_CHANNEL = gql`

`;
