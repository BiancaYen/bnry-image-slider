// App

import { Global as GlobalStyles } from '@emotion/core';
import React, { useEffect, useState } from 'react';

// Components
import {
    DisplayContent,
    Error,
    Else,
    Loader,
    Slider
} from '../components';

// Requests
import getImages from '../requests/getImages';

// Styles
import { Container, resetStyles } from './styles';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [images, setData] = useState([]);

    // Effects
    // Request on mount
    useEffect(() => {
        getImages()
            .then((data) => {
                setData(data);
            })
            .catch(({ response }) => {
                const { status = 500, statusText = 'Internal Error' } = response || {};
                setError(`Whoops! Status ${status}: ${statusText}`);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <GlobalStyles styles={resetStyles} />
            <Loader isLoading={isLoading}>
                <DisplayContent isDisplayed={!error}>
                    <Slider items={images} />
                    <Else>
                        <Error>
                            {error}
                            <br />
                            {'We can\'t load the slider'}
                        </Error>
                    </Else>
                </DisplayContent>
            </Loader>
        </Container>
    );
};

export default App;
