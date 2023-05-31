import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;   
    font-family: 'Outfit', sans-serif; 
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input {
    font: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
  } 

  .lock-scroll {
    overflow: hidden;    
  }

  body.lock-scroll main {
    visibility: hidden;
  }
`;
