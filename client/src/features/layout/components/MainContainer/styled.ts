import styled from 'styled-components';

export const AppContainer = styled.section`
    display: flex;
    width: 100vw;
    height: calc(100% - ${props => props.theme.headerSize});
`
