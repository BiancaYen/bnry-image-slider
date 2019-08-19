import styled from '@emotion/styled';

// Utils
import getTheme from '../../utils/getTheme';

const getProperty = getTheme('error');

const Container = styled.div`
    color: ${getProperty('color')};
    font-size: 40px;
    left: 50%;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
`;

export default Container;
