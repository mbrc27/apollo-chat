import styled, { injectGlobal } from 'styled-components';

export const AppIntro = styled.p`
    font-size: large;
`;

export const GlobalStyles = injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
  }
`
