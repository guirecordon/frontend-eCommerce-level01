import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['green-500']};
    overflow-x: hidden;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button, fieldset {
    border: none;
  }

  fieldset {
    line-height: 1.6rem;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;
