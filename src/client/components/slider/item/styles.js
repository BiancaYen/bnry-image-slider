import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Constants
import alignmentConstants from '../../constants';

// Utils
import getTheme from '../../../utils/getTheme';

const getProperty = getTheme('slider');

const getAlignment = ({ alignment }) => css`
    ${alignment === alignmentConstants.left ? 'left: 0' : 'right: 0'};
`;

const Container = styled.div`
    background: ${getProperty('background')};
    display: inline-block;
    height: 0;
    padding-top: 62.5%;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const ClickContainer = styled.div`
    cursor: pointer;
    height: 100%;;
    outline: none;
    position: absolute;
    top: 0;
    width: 50%;
    z-index: 200;
    ${getAlignment};
`;

export {
    ClickContainer,
    Container
};
