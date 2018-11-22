import { gql } from 'apollo-boost';

import { Query } from 'react-apollo';
import { Channels } from './__generated__/Channels';

export const CHANNELS_QUERY = gql`
  query Channels {
    channels {
      id
      title
    }
  }
`;
export class ChannelQuery extends Query<Channels>{ };

export interface IChannel {
  currentChannel: {
    id: string
    title: string
  }
}


export const SELECTED_CHANNEL = gql`
  query Channel {
    currentChannel @client {
      id
      title
    }
  }
`;

export const SELECT_CHANNEL = gql`
  mutation SelectChannel($id: ID!) {
    SelectChannel(id: $id) @client
  }
`;
