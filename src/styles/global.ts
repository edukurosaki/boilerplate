import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 60%;
  }
  html, body, #__next {
    height: 100%;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubunto, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`
export default GlobalStyles