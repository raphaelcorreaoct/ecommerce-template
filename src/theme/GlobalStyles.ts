import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body, html {
        margin: 0;
        padding: 0;
    }

    input, button {
        outline: none;
    }

    button {
        cursor: pointer;
    }

    .wrapper {
        max-width: 1334px;
        width: 100%;
        margin: 0 auto;
    }

    .main-slide {
        img {
            width: 100%;
            height: auto;
            margin: 0 auto;
        }
    }

`