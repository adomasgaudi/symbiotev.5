import { Theme } from '@material-ui/core/styles';
import {amber} from '@material-ui/core/colors'
import { createTheme } from "@material-ui/core";

interface CustomTheme {
    bg?: {
        main?: string
    }, 
    text?: {
        main?: string,
        col?: string
    },
    flex?: {
      row?: string
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


const themeFunction = (font: number, color: number) => {

  let colors = ['red', 'blue'];
  const fontSize = 22

  return createTheme({
    typography: {
      "fontFamily": `${fontfamilyArray[font]}`,
      "fontSize": fontSize,
    },
    palette: {
      primary: {
        main: amber[900]
      },
      secondary: {
        main: '#326eb3'
      }
    },
    flex: {
      row: `display: flex;
      flex-direction: row;`
    },
    bg: {
      main: '#fdfbf8'
    },
    text: {
      main: '#425564',
      col: `font-family: ${fontfamilyArray[font]};
      font-size: ${fontSize}px;
      color: #425564;`
    }
  })
}




export {themeFunction}