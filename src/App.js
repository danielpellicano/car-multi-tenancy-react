import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Button, TextField } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import {MdPayment} from 'react-icons/md'
import Routes from './Routes';
import { Loading } from './view/components'

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: blue[500]  
    }
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'outlined',
      fullWidth: true
    }
  }
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Loading />
      <Routes />
    </ThemeProvider>
  </Provider>
)

export default App;