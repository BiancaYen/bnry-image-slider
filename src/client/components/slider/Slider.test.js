// Slider Test

import { shallow } from 'enzyme';
import React from 'react';

// Components
import Slider from './Slider';

// Constants
const items = [
    {
        id: 1,
        artist: 'Paul Charles K',
        source: 'https://ucarecdn.com/2adfdb85-53dd-435c-a85d-13cdb1839f98/azure_serenity.jpg',
        title: 'Azure Serenity'
    },
    {
        artist: 'Paul Charles K',
        id: 2,
        source: 'https://ucarecdn.com/aa29889f-263e-44e4-a142-22c2725ab1a4/magenta_morning.jpg',
        title: 'Magenta Morning'
    }
];

describe('Slider', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <Slider items={items} />
        );

        expect(component).toMatchSnapshot();
    });

    // @Todo Write more extensive tests to deal with getting request and updating state; no too familiar with testing React Hooks
});
