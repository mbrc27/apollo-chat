import { gql } from 'apollo-boost';

export interface Channel {
  id: string,
  title: string,
};

export interface ChannelsResponse {
  channels: Channel[],
};

export const CHANNELS_QUERY = gql`
  query Channels {
    channels {
      id
      title
    }
  }
`;
