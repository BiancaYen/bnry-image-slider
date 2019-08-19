import styled from '@emotion/styled';
import { rgba } from 'polished';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('slider');

// Constants
const height = '80px';

const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    background: ${rgba(0, 0, 0, 0.5)};
    justify-content: space-between;
    height: ${height};
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
`;

const Container = styled.div`
    background: ${getProperty('background')};
    position: relative;
    width: 100%;
    height: calc(100vh - ${height});
    overflow: hidden;
    white-space: nowrap;
`;

const InnerContainer = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: ${({ translateX }) => `translate(${translateX}px, -50%)`};
    transition: transform ${({ transitionSeconds }) => transitionSeconds}ms;
`;

const TitleCopy = styled.div`
    color: ${getProperty('color')};
    font-size: 18px;
    position: fixed;
    padding: 20px 0;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    @media (min-width: ${getTheme('breakpoints')('medium')}) {
        padding: 0;
        position: relative;
        font-size: 20px;
    }
`;

export {
    ButtonContainer,
    Container,
    InnerContainer,
    TitleCopy
};
