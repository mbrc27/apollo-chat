import * as React from 'react';
import { SidebarWrapper } from './styled';

type Props = {
  children: React.ReactNode,
};

const Sidebar = ({ children }: Props) => (
  <SidebarWrapper>
    {children}
  </SidebarWrapper>
);

export default Sidebar;
