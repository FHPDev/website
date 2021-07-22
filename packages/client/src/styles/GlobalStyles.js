import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --cfBlue: #5680E9;
    --seagull: #84CEEB;
    --pictonBlue: #5AB9EA;
    --pGray: #C1C8E4;
    --amethyst: #8860D0;
    --ltblue: #F7DCFA;
    --white: #C3FAEC;
    --black: #222;
    --radius: .3rem;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--amethyst) var(--seagull);
  }

  body::-webkit-scrollbar-track {
    background: var(--seagull);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--amethyst) ;
    border-radius: 6px;
    border: 3px solid var(--seagull);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  input::-moz-focus-inner {
    border:0; 
    padding:0; 
    margin:0;
  }

  ul, ol, dd {
    margin:0; 
    padding:0; 
    list-style:none;
  }

  cite {
    font-style:normal;
  }

  fieldset {
    border-width:0; 
    padding:0; margin:0;
  }

  .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 clamp(2rem, 1vw, 4rem);
      width: 100%;
  }

  .content-container {
    padding: clamp(2rem, 3vw, 6rem);
    color: var(--black);
  }
`

export default GlobalStyles
