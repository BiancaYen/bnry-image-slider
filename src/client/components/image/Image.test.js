// Image Test

import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Image from './Image';

// Constants
const source = 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
const title = 'Title';

describe('Image', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Image source={source} />
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that prop types are correct', () => {
        const component = mount(
            <Image
                source={source}
                title={title}
            />
        );

        expect(component.find('img').prop('src')).toEqual(source);
        expect(component.find('img').prop('alt')).toEqual(title);
    });
});
