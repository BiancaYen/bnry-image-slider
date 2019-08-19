import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';
import alignmentConstants from '../constants';

const getProperty = getTheme('button');

// Constants
const tooltipSpacing = '0';

const getAlignment = ({ alignment }) => css`
    ${alignment === alignmentConstants.left ? `left: ${tooltipSpacing}` : `right: ${tooltipSpacing}`};
`;

const Tooltip = styled.div`
    bottom: 40px;
    color: #000;
    visibility: hidden;
    background-color: #FFF;
    text-align: center;
    padding: 15px;
    position: absolute;
    z-index: 300;
    ${getAlignment};
`;

const Container = styled.div`
    position: relative;
    &:hover ${Tooltip} {
        visibility: visible;
    }
    button{
        background: transparent;
        color: ${getProperty('color')};
        cursor: pointer;
        font-size: 18px;
        outline: none;
        @media (min-width: ${getTheme('breakpoints')('medium')}) {
            font-size: 20px;
        }
    }
`;

export {
    Container,
    Tooltip
};
