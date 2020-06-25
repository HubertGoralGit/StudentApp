import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    padding-top: 100px;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    @media (min-width: 960px) {
      padding-left: 150px;
      padding-top: 0;
    }
  }
`;

export default GlobalStyle;
