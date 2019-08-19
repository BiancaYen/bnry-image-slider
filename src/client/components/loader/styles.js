import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('loader');

const animation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

const Indicator = styled.div`
    display: inline-block;
    color: ${getProperty('color')};
    font-size: 40px;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 200px;
    &:after {
        background-color: ${getProperty('color')};
        bottom: 0;
        content: '';
        height: 1px;
        left: 0;
        animation: ${animation} 0.75s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        position: absolute;
    }
`;

const Container = styled.div`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export {
    Indicator,
    Container
};
