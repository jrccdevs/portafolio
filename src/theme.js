// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f3ff', 
    },
    background: {
      default: '#050505',
      paper: 'rgba(10, 25, 41, 0.7)', 
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Courier New", monospace',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 243, 255, 0.3)',
        },
      },
    },
  },
});








