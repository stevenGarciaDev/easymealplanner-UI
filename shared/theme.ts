import { createGlobalStyle, ThemeProps } from 'styled-components';
import { normalize } from 'styled-normalize'

export const theme = {
    fonts: {
      default: "'Roboto', Helvetica, sans-serif",
      content: "Nunito Sans', Helvetica, sans-serif"
    },
    colors: {
      orange: "#f4ae40",
      blue: "#387af5",
      pink: "#eb57a3",
      // Credits: https://colors.lol/fou.
      gray: "#aaa"
    }
  }

export type MainThemeProps = ThemeProps<typeof theme>
export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  ${normalize};
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: #111;
    text-decoration: none;
  }

  body {
    color: #111;
    font-family: ${(props) => props.theme.fonts.default};
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;
  }
`;

