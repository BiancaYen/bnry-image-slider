// Error Test

import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Error from './Error';

// Constants
const error = 'Error';

describe('Error', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Error>
                {error}
            </Error>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that prop types are correct', () => {
        const component = mount(
            <Error>
                {error}
            </Error>
        );

        expect(component.find('div').text()).toEqual(error);
    });
});
