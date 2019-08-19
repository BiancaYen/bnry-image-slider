// DisplayContent Test

import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import DisplayContent from './DisplayContent';

// Constants
const content = 'Content';

describe('DisplayContent', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <DisplayContent isDisplayed>
                <div>
                    {content}
                </div>
            </DisplayContent>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that content renders correctly depending on prop type', () => {
        const component = mount(
            <DisplayContent isDisplayed>
                <div>
                    {content}
                </div>
            </DisplayContent>
        );

        expect(component.find('div').text()).toEqual(content);
    });

    it('asserts that content renders correctly depending on prop type', () => {
        const component = mount(
            <DisplayContent isDisplayed={false}>
                <div>
                    {content}
                </div>
            </DisplayContent>
        );

        expect(component.html()).toEqual(null);
    });
});
