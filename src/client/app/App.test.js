// App Test

import { shallow } from 'enzyme';
import React from 'react';

// Components
import App from './App';

describe('App', () => {
    it('renders with all required prop types', () => {
        const component = shallow(
            <App />
        );

        expect(component).toMatchSnapshot();
    });

    // @Todo Write more extensive tests to deal with getting request and updating state; no too familiar with testing React Hooks
});
