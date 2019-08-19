// Slider Item

import React from 'react';
import PropTypes from 'prop-types';

// Constants
import alignmentConstants from '../../constants';

// Styles
import { ClickContainer, Container } from './styles';

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPreviousClick: PropTypes.func.isRequired
};

const SliderItem = ({
    children,
    onNextClick,
    onPreviousClick
}) => (
    <Container>
        <ClickContainer
            alignment={alignmentConstants.left}
            data-test="previous"
            role="button"
            tabIndex="0"
            onClick={event => onPreviousClick(event.preventDefault())}
        />
        <ClickContainer
            alignment={alignmentConstants.right}
            data-test="next"
            role="button"
            tabIndex="0"
            onClick={event => onNextClick(event.preventDefault())}
        />
        {children}
    </Container>
);

SliderItem.propTypes = propTypes;

export default SliderItem;
