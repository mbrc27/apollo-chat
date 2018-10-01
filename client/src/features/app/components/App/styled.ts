import styled, { injectGlobal } from 'styled-components';

export const AppIntro = styled.p`
    font-size: large;
    flex-grow: 5;
`;

export const GlobalStyles = injectGlobal`
  html, body, #root {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`
export const theme = {
  headerSize: '60px',
};
