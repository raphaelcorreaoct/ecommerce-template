import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
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