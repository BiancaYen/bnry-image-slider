// Loader

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import { Indicator, Container } from './styles';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const Loader = ({ isLoading, children }) => {
    if (isLoading) {
        return (
            <Container>
                <Indicator>
                    Loading
                </Indicator>
            </Container>
        );
    }
    return <div>{children}</div>;
};

Loader.propTypes = propTypes;

export default Loader;
