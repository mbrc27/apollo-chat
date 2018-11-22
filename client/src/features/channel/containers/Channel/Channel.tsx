import * as React from 'react';
import { graphql, compose } from 'react-apollo';

import {
  CHANNELS_QUERY,
  SELECT_CHANNEL,
  //SELECTED_CHANNEL,
  IChannel,
} from '../../channel.queries';

import { Channels } from '../../__generated__/Channels';

interface IProps extends Channels, IChannel {
  children: React.ReactNode,
  loading: boolean,
  selectChannel: (id: string) => void,
};

class Channel extends React.PureComponent<IProps> {
  componentDidUpdate(prevProps: IProps) {
    const { loading, channels, selectChannel } = this.props;
    const shouldInitiallySelectChannel = prevProps.loading && !loading;

    if (shouldInitiallySelectChannel && channels && channels.length) {
      const [channel] = channels;
      channel && selectChannel(channel.id);
    }
  }

  render() {
    const { currentChannel, children } = this.props;
    return (
      <div>
        {children}
        {console.log(currentChannel)}
      </div>
    )
  }
}

export default compose(
  graphql<{}, Channels>(CHANNELS_QUERY, {
    props: ({ data }) => ({ ...data }),
  }),
  // graphql<{}, IChannel>(SELECTED_CHANNEL, {
  //   props: ({ data }) => ({ ...data }),
  // }),
  graphql(SELECT_CHANNEL, {
    props: ({ mutate }) => ({
      selectChannel: (id: string) =>
        (mutate && mutate({
          variables: { id },
        })),
    }),
  }),
)(Channel);
