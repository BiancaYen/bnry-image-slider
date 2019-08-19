// Loader Test

import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Loader from './Loader';

// Constants
const content = 'Content';

describe('Loader', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Loader isLoading>
                {content}
            </Loader>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that content renders correctly depending on prop type', () => {
        const component = mount(
            <Loader isLoading>
                {content}
            </Loader>
        );

        expect(component.find('div div').text()).toEqual('Loading');
    });

    it('asserts that content renders correctly depending on prop type', () => {
        const component = mount(
            <Loader isLoading={false}>
                {content}
            </Loader>
        );

        expect(component.find('div').text()).toEqual(content);
    });
});
