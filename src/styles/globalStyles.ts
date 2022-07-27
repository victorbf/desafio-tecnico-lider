import { createGlobalStyle } from 'styled-components';
import { SubTitle } from './typography';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  body, #root {
    height: 100vh;
  }

  #root > div {
    height: 100%;
  }

  p {
    margin: 0;
  }

  button {
    ${SubTitle};
    cursor: pointer;
    border: none;
    color: #ffffff;
    padding: 12px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  input {
    ${SubTitle};
    height: 48px;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    margin-right: 8px;
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;

    &:focus-visible {
      outline: none;
    }
  }
`;

export default GlobalStyle;
