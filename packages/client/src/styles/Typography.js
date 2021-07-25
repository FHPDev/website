import { createGlobalStyle } from 'styled-components'

import mainFont from '../assets/fonts/Comfortaa-VariableFont_wght.ttf'
import headingFont from '../assets/fonts/SansitaSwashed-VariableFont_wght.ttf'

const Typography = createGlobalStyle`
    @font-face {
        font-family: Comfortaa;
        src: url(${mainFont});
        font-weight: 300 700;
        font-display: fallback;
    }

    @font-face {
        font-family: SansitaSwashed;
        src: url(${headingFont});
        font-weight: 300 700;
        font-display: fallback;
    }

    html {
        font-size: 62.5%;
        line-height: 1.5;
        font-family: Comfortaa, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--black);
    }

    p, li {
        letter-spacing: 0.5px;
        font-size: clamp(1.6rem, 3vw, 2.2rem);
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: inherit;
        margin: 0;
    }

    h1, .h1 {
        font-family: SansitaSwashed;
        font-size: clamp(4.6rem, 6vw, 8.4rem);
        letter-spacing: 0.2rem;
        line-height: 1;
        text-transform: capitalize;
        font-weight: 700;
    }

    h2, .h2 {
        font-family: SansitaSwashed;
        font-size: clamp(2.6rem, 6vw, 6.2rem);
    }

    .quote-display {
        font-size: clamp(1.8rem, 3vw, 2rem);
        text-align: center;
        font-style: italic;
        position: relative;
        top: -4rem;
        background-color: var(--seagull);
        border-radius: 1rem;
        box-shadow: 0 0 .6rem rgba(0, 0, 0, .4);
        padding: 2rem 1rem;
    }

    a {
        text-decoration: none; 
        color: inherit; 
        cursor: pointer;
    }

    button {
        background-color: transparent; 
        color:inherit; 
        border-width: 0; 
        padding: 0; 
        cursor:pointer;
    }
`

export default Typography