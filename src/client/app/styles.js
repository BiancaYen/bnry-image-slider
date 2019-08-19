import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Utils
import getTheme from '../utils/getTheme';

const getProperty = getTheme('app');

const resetStyles = css`
    * {
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    
    html, body {
      margin: 0;
      height: 100%;
        > div {
          &:first-of-type {
            height: 100%;
          }
        }
    }

    html, body, button, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite,
    code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure,
    figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video {  
        margin: 0;  
        padding: 0; 
        border: 0;  
        font-family: 'Playfair Display', serif;
        vertical-align: baseline;
        letter-spacing: 1.2px; 
    }
    
    a {
        text-decoration: none;
    }
`;

const Container = styled.div`
    background: ${getProperty('background')};
    height: 100%;
`;

export {
    Container,
    resetStyles
};
