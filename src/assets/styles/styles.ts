import { createGlobalStyle } from "styled-components";
import { createTheme } from "@material-ui/core";

const fontfamilyArray = [
  "'Azeret Mono', monospace",
  "'Roboto', sans-serif;",
  "'Yellowtail', cursive;",
  "'proggy', monospace"
]

const GlobalStylesGeneral = ` 

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

const GlobalStylesOther = `  
  
  // general styles
  *{
    // outline: 1px dashed red!important;
  }

  body{
    border-radius: 2px; 
    font-size: 20px;
    font-family: ${fontfamilyArray[3]}
  }

  p{opacity: 0.6; line-height: 1.5;}

  img{max-width: 100%}
`

const GlobalStyles = createGlobalStyle` 
  ${GlobalStylesGeneral}
  ${GlobalStylesOther}
`

const StyledTheme = {
  light: {
    background: "white",
    font: "#111"
  },
  dark: {
    background: "black",
    font: "#eee"
  }
}


// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: any;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: any;
//     };
//   }
// }



const theme = createTheme({
  typography: {
    fontFamily: 'proggy'
 },
});



export {GlobalStyles, StyledTheme, theme}