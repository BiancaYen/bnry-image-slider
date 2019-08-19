// Error

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import Container from './styles';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired
};

const Error = ({ children }) => (
    <Container>
        {children}
    </Container>
);

Error.propTypes = propTypes;

export default Error;
