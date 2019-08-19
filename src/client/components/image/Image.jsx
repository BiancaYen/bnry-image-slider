// Image

import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

// Components
import ImagePlaceholder from './placeholder/ImagePlaceholder';

// Styles
import { ImageTag } from './styles';

// Default Props
const defaultProps = {
    title: 'No title provided'
};

// Prop Types
const propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string
};

const Image = ({ source, title }) => {
    const [error, setError] = useState(false);

    const handleImageError = () => {
        if (!error) {
            setError(true);
        }
    };

    return (
        <Fragment>
            {
                !error
                    ? (
                        <ImageTag
                            alt={title}
                            src={source}
                            onError={handleImageError}
                        />
                    )
                    : <ImagePlaceholder title={title} />
            }
        </Fragment>
    );
};

Image.defaultProps = defaultProps;
Image.propTypes = propTypes;

export default Image;
