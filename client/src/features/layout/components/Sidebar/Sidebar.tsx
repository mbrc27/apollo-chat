import * as React from 'react';
import { SidebarWrapper } from './styled';

interface IProps {
  children: React.ReactNode,
};

const Sidebar = ({ children }: IProps) => (
  <SidebarWrapper>
    {children}
  </SidebarWrapper>
);

export default Sidebar;
