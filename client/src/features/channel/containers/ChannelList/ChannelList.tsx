import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import {
  CHANNELS_QUERY,
} from '../../channel.queries';

import { Channels } from '../../__generated__/Channels';


import { ListWrapper } from './styled';

interface Props extends Channels {
  children: React.ReactNode,
  loading: boolean,
};

const ChannelList = ({ loading, channels, children }: Props) => (
  <ListWrapper>
    {children}
    {console.log(loading)}
    {console.log(channels)}
  </ListWrapper>
);


export default compose(
  graphql<{}, Channels>(CHANNELS_QUERY, {
    props: ({ data }) => ({ ...data }),
  }),
)(ChannelList);
