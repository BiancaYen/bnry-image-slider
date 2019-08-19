// Slider

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../button/Button';
import Image from '../image/Image';
import SliderItem from './item/SliderItem';

// Styles
import {
    ButtonContainer,
    Container,
    InnerContainer,
    TitleCopy
} from './styles';

// Utils
import useWindowWidth from '../../utils/useWindowWidth';

// Prop Types
const propTypes = {
    items: PropTypes.array.isRequired
};

const Slider = ({ items }) => {
    const animationSeconds = 1000;
    const slideOffset = useWindowWidth();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionSeconds, setTransition] = useState(animationSeconds);
    const [translateX, setTranslate] = useState(-slideOffset);

    const nextIndex = (currentIndex + 1) % items.length;
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    const total = items.length;

    const reset = (resetIndex, resetTranslate) => {
        setCurrentIndex(resetIndex);
        setTranslate(resetTranslate);
        // Set the transition effect to 0 sec so that the reset is visually hidden
        setTransition(0);
        // @Todo Add throttle to event handlers to prevent navigation during this time
    };

    const handleNextClick = () => {
        setCurrentIndex(nextIndex);
        setTranslate(previousState => previousState - slideOffset);
        setTransition(animationSeconds);

        // Last item in array
        // Reset to original values to create infinite loop
        if (nextIndex === 0) {
            setTimeout(() => {
                reset(0, -slideOffset);
            }, animationSeconds);
        }
    };

    const handlePreviousClick = () => {
        setCurrentIndex(previousIndex);
        setTranslate(previousState => previousState + slideOffset);
        setTransition(animationSeconds);

        // First item in array
        // Reset to the values that would normally have at this index to create infinite loop
        if (currentIndex === 0) {
            setTimeout(() => {
                reset(previousIndex, -slideOffset * total);
            }, animationSeconds);
        }
    };

    const getMediaType = () => {
        // This is extendable to add more media types such as video
        return Image;
    };

    const getTitleByIndex = (index) => {
        const { artist = '', title = '' } = items[index] || {};
        return [title, `by ${artist}`].join(' | ');
    };

    const getItems = () => {
        // Add the last item to the start of the array and the first item to the end of the array
        // in order to create an infinite scroll effect
        const lastItem = items[items.length - 1];
        const firstItem = items[0];
        return [
            { ...lastItem, id: `last-${lastItem.id}` },
            ...items,
            { ...firstItem, id: `first-${firstItem.id}` }
        ];
    };

    useEffect(() => {
        setTranslate(-slideOffset * (currentIndex + 1));
        setTransition(0);
    }, [slideOffset]);

    const Media = getMediaType();

    return (
        <Container>
            <InnerContainer
                translateX={translateX}
                transitionSeconds={transitionSeconds}
            >
                { items.length && getItems().map(({ id, source, title }) => (
                    <SliderItem
                        key={id}
                        onNextClick={handleNextClick}
                        onPreviousClick={handlePreviousClick}
                    >
                        <Media source={source} title={title} />
                    </SliderItem>
                ))}
            </InnerContainer>
            <ButtonContainer>
                <Button
                    alignment={Button.alignment.left}
                    tooltip={getTitleByIndex(previousIndex)}
                    onClick={handlePreviousClick}
                >
                    Previous
                </Button>
                <TitleCopy>
                    {getTitleByIndex(currentIndex)}
                </TitleCopy>
                <Button
                    alignment={Button.alignment.right}
                    tooltip={getTitleByIndex(nextIndex)}
                    onClick={handleNextClick}
                >
                    Next
                </Button>
            </ButtonContainer>
        </Container>
    );
};

Slider.propTypes = propTypes;

export default Slider;
