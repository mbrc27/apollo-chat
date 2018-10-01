import * as React from 'react';

import { AppContainer } from './styled';

type Props = {
  children: React.ReactNode,
};

const MainContainer = ({ children }: Props) => (
  <AppContainer>
    {children}
  </AppContainer>
);


export default MainContainer;
