// Image Placeholder

import PropTypes from 'prop-types';
import React from 'react';

// Styles
import Container from './styles';

// Prop Types
const propTypes = {
    title: PropTypes.string.isRequired
};

const ImagePlaceholder = ({ title }) => (
    <Container>
        <div>
            404: Image Not Found
            <br />
            for&nbsp;
            {title}
        </div>
    </Container>
);

ImagePlaceholder.propTypes = propTypes;

export default ImagePlaceholder;
