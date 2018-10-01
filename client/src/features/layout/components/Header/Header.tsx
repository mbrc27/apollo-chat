import * as React from 'react';
import { AppHeader, AppTitle } from './styled';

type Props = {
  children?: React.ReactNode,
  title: string,
};

const Header = ({ children, title }: Props) => (
  <AppHeader>
    <AppTitle>{title}</AppTitle>
    {children}
  </AppHeader>
);


export default Header;
