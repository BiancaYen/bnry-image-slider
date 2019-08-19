// Else Test

import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Else from './Else';

// Constants
const content = 'Content';

describe('Else', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Else>
                <div>
                    {content}
                </div>
            </Else>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that prop types are correct', () => {
        const component = mount(
            <Else>
                <div>
                    {content}
                </div>
            </Else>
        );

        expect(component.find('div').text()).toEqual(content);
    });
});
