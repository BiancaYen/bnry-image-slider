// Button

import React from 'react';
import PropTypes from 'prop-types';

// Constants
import alignmentConstants from '../constants';

// Styles
import { Container, Tooltip } from './styles';

// Prop Types
const propTypes = {
    alignment: PropTypes.oneOf([
        alignmentConstants.left,
        alignmentConstants.right
    ]).isRequired,
    children: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const Button = ({
    alignment,
    children,
    tooltip,
    onClick
}) => {
    return (
        <Container>
            <Tooltip alignment={alignment}>
                {tooltip}
            </Tooltip>
            <button
                type="type"
                onClick={event => onClick(event.preventDefault())}
            >
                {children}
            </button>
        </Container>
    );
};

Button.propTypes = propTypes;
Button.alignment = alignmentConstants;

export default Button;
