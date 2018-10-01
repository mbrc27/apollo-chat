import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header, Sidebar, MainContainer } from '../../../layout';
import { AppIntro, theme } from './styled';
import { ChannelList } from '../../../channel';

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
            <AppIntro>
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </AppIntro>
          </MainContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
