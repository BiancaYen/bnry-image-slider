// Slider Item Test

import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

// Components
import SliderItem from './SliderItem';

// Constants
const image = (
    <img
        src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Title"
    />
);

describe('SliderItem', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <SliderItem
                onNextClick={() => {}}
                onPreviousClick={() => {}}
            >
                {image}
            </SliderItem>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that prop types are correct', () => {
        const onNextClick = sinon.spy();
        const onPreviousClick = sinon.spy();
        const component = mount(
            <SliderItem
                onNextClick={onNextClick}
                onPreviousClick={onPreviousClick}
            >
                {image}
            </SliderItem>
        );

        const divNext = 'div[role="button"][data-test="next"]';
        const divPrevious = 'div[role="button"][data-test="previous"]';
        expect(component.find(divNext).exists()).toEqual(true);
        expect(component.find(divPrevious).exists()).toEqual(true);
        expect(component.contains(image)).toEqual(true);

        component.find(divNext).simulate('click');
        component.find(divPrevious).simulate('click');
        expect(onNextClick).toHaveProperty('callCount', 1);
        expect(onPreviousClick).toHaveProperty('callCount', 1);
    });
});
