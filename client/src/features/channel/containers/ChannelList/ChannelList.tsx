import * as React from 'react';

import {
  CHANNELS_QUERY,
  ChannelQuery,
} from '../../channel.queries';

import { ListWrapper } from './styled';

interface IProps {
  children?: React.ReactNode,
};

const ChannelList = ({ children }: IProps) => (
  <ChannelQuery query={CHANNELS_QUERY}>
    {({ loading, error, data }) => (
      <ListWrapper>
        {children}
        {console.log(loading)}
        {console.log(error)}
        {console.log(data && data.channels)}
      </ListWrapper>
    )}
  </ChannelQuery>
);


export default ChannelList;
