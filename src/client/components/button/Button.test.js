// Button Test

import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

// Components
import Button from './Button';

// Constants
const alignment = 'left';
const title = 'Title';
const tooltip = 'Tooltip';

describe('Button', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Button
                alignment={alignment}
                tooltip={tooltip}
                onClick={() => {}}
            >
                {title}
            </Button>
        );

        expect(component).toMatchSnapshot();
    });

    it('asserts that prop types are correct', () => {
        const onClick = sinon.spy();
        const component = mount(
            <Button
                alignment={alignment}
                tooltip={tooltip}
                onClick={onClick}
            >
                {title}
            </Button>
        );

        expect(component.find('button').text()).toEqual(title);
        expect(component.find('div div').text()).toEqual(tooltip);

        component.find('button').simulate('click');
        expect(onClick).toHaveProperty('callCount', 1);
    });
});
