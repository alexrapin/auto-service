
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 556,
      sm: 768,
      md: 991,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#232e7a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f1e140',
      contrastText: '#232e7a',
    },
    background: {
      default: '#ffffff',
      paper: '#f6f4f5',
    },
    text: {
      primary: '#171717',
      secondary: '#232e7a',
      disabled: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  },
});

export default responsiveFontSizes(theme);
