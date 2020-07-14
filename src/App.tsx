import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/layout';
import { theme, GlobalStyle } from './styles';
import { AppStyled, MainStyled } from './App.styled';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppStyled>
          <Header />
          <MainStyled>App</MainStyled>
        </AppStyled>
      </ThemeProvider>
    </Router>
  );
}

export { App };
