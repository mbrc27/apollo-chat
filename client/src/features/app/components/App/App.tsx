import * as React from 'react';
import { Header, Sidebar } from '../../../layout';

import { AppIntro } from './styled';

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <Sidebar />
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </>
    );
  }
}

export default App;
