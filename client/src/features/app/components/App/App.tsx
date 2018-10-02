import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header, Sidebar, MainContainer, Content } from '../../../layout';
import { AppIntro, theme } from './styled';
import { ChannelList, Channel } from '../../../channel';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header title="Welcome to React" />
          <MainContainer>
            <Sidebar>
              <ChannelList />
            </Sidebar>
            <Content>
              <Channel />
              <AppIntro>
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </AppIntro>
            </Content>
          </MainContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
