import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/index.css';
import {
  createTheme,
  ThemeProvider,
  styled,
} from '@mui/material/styles';
import routes from './pages';
import AppRoutes from './AppRoutes';
import AppProviders from './AppProviders';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    extra: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 481,
      laptop: 769,
      desktop: 1025,
      extra: 1201,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProviders>
          <AppRoutes routes={routes} />
        </AppProviders>
      </Router>
    </ThemeProvider>
  );
};

export default App;
