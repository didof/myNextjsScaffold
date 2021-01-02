import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: Open-sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.body.backgroundColor};
  }
`

export default GlobalStyle