import * as React from 'react';
import { ContentWrapper } from './styled';

interface IProps {
  children: React.ReactNode,
};

const Content = ({ children }: IProps) => (
  <ContentWrapper>
    {children}
  </ContentWrapper>
);

export default Content;
