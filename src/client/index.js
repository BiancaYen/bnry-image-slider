import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './app/App';

// Theme
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
