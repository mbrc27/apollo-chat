import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import {
  ChannelsResponse,
  Channel,
  CHANNELS_QUERY,
} from '../../channel.queries';

import { ListWrapper } from './styled';

type Props = {
  children: React.ReactNode,
  loading: boolean,
  channels: Channel[],
};

const ChannelList = ({ loading, channels, children }: Props) => (
  <ListWrapper>
    {children}
    {console.log(loading)}
    {console.log(channels)}
  </ListWrapper>
);


export default compose(
  graphql<{}, ChannelsResponse>(CHANNELS_QUERY, {
    props: ({ data }) => ({ ...data }),
  }),
)(ChannelList);
