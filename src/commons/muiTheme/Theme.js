import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 18,
    display4: {
      fontSize: 18,
    },
    display3: {
      fontSize: 18,
    },
    display2: {
      fontSize: 18,
    },
    display1: {
      fontSize: 18,
    },
    headline: {
      fontSize: 18,
    },
    title: {
      fontSize: 18,
    },
    subheading: {
      fontSize: 18,
    },
    body2: {
      fontSize: 18,
    },
    body1: {
      fontSize: 18,
    },
    caption: {
      fontSize: 18,
    },
    button: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: '#7367f0',
    },
    success: {
      main: '#26a69a',
    },
    error: {
      main: '#f44336',
    },
    // info: {
    //   main: '#009688',
    // },
    secondary: {
      main: '#009688',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
