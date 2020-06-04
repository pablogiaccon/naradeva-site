import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #ffff;
    -webkit-font-smoothing: antialiased;
    max-width: 1480px;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 1440px;
    margin: 0 auto;
    /* padding: 40px 20px; */
  }

  button{
    cursor: pointer;
  }

`;
