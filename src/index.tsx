import 'assets/styles/styles.css'

import {GlobalStyles, StyledTheme, theme} from 'assets'

import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@material-ui/core'
import { render } from 'react-dom';
import {store} from 'store'

//console.log(theme);

render(

  <BrowserRouter>
    <Provider store={store}>
      <StyledThemeProvider theme={StyledTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </StyledThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


