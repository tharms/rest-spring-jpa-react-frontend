import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

/* stylelint-disable */
const baseStyles = () => injectGlobal`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.body};
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${theme.colors.dark};
    background: ${theme.colors.background};
  }

  hr {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  strong {
    font-weight: 700;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  button.button-text span span {
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text};
    text-transform: uppercase;
  }

  button.button-text {
    background-color: ${theme.colors.gray};
  }

  button.button-text:hover {
    background-color: ${theme.colors.border};
  }

  #client-snackbar {
    font-size: ${theme.fontSizes.body};
  }

  .step-icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.fabric-stepper div button span span svg {
    width: 30px;
    height: 30px;
    display: flex;
  }

  div.fabric-stepper div button span span svg text {
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizes.body};
  }

  div.fabric-stepper div button span span span {
    font-size: ${theme.fontSizes.body};
  }

`;

export default baseStyles;
