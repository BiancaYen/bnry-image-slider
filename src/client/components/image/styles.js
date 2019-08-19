import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('image');

const ImageTag = styled.img`
    left: 50%;
    height: auto;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
`;

const Placeholder = styled.div`
    background: ${getProperty('background')};
    color: ${getProperty('color')};
    font-size: 40px;
    height: 100vh;
    div {
        left: 50%;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        width: 100%;
    }
`;

export {
    ImageTag,
    Placeholder
};
