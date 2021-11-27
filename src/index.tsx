import 'assets/styles/styles.css'

import {GlobalStylesGeneral, GlobalStylesOther, theme} from 'assets'

import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { render } from 'react-dom';
import {store} from 'store'

render(

  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <GlobalStylesGeneral />
          <GlobalStylesOther />
          <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
  

