import 'assets/styles/styles.css'

import {GlobalStyles, MuiTheme, StyledTheme} from 'assets'

import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { Provider } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import {store} from 'store'

render(

  <BrowserRouter>
    <Provider store={store}>
      <StyledThemeProvider theme={StyledTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyles />
          <App />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


