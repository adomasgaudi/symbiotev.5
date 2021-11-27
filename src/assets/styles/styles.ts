import 'styled-components';

import { Theme } from '@material-ui/core/styles';
import { createGlobalStyle } from "styled-components";
import { createTheme } from "@material-ui/core";

interface CustomTheme {
    bg: {
        main: string,
        light: string
    }, 
    text: {
        main: string,
        light: string
    }
}
declare module '@material-ui/core/styles' {
    interface Theme extends CustomTheme {}
    interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}




const fontfamilyArray = [
  "'Azeret Mono', monospace",
  "'Roboto', sans-serif;",
  "'Yellowtail', cursive;",
  "'proggy', monospace"
]

const GlobalStylesGeneral = createGlobalStyle` 

  // general init styles
  html{ 
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
  body{
    margin: 0;
    padding: 0;
  }
  *{box-sizing: border-box}

`

const GlobalStylesOther = createGlobalStyle`  
  
  // general styles
  *{
    // outline: 1px dashed red!important;
  }

  body{
    border-radius: 2px; 
    font-size: 20px;
    font-family: ${fontfamilyArray[3]};
  }

  p{opacity: 0.6; line-height: 1.5;}

  img{max-width: 100%}
`



const theme = createTheme({
  typography: {
    fontFamily: 'proggy'
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#3F8AE0'
    },
    secondary: {
      main: '#326eb3'
    }
  },
  bg: {
    main: '#fff',
    light: '#F4F5F7'
  },
  text: {
    main: '#172B4D',
    light: '#262930'
  }
});



export { GlobalStylesGeneral, GlobalStylesOther, theme }