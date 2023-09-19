import { createGlobalStyle } from 'styled-components'
import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition:  opacity 0.5s ease-out;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato';
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    outline: 0;
    background-color: #241b28;
    color: #ffffff;
    letter-spacing: 0.5px;
  }

  html, body, #root {
    height: 100%;
  }

  .pallete {
    color: #6d6073;
    color: #574b5d;
    color: #3c3341;
    color: #241b28;
    color: #221428;
  }
`
