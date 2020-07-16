import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { StoreProvider } from './store';
import { Header } from './components/layout';
import { theme, GlobalStyle } from './styles';
import { AppStyled, MainStyled } from './App.styled';

const GaragesRouter = lazy(() => import('./features/garages/router'));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <GlobalStyle />
          <AppStyled>
            <Header />
            <MainStyled>
              <Suspense fallback={null}>
                <Switch>
                  <Route path="/garages" component={GaragesRouter} />

                  <Redirect to="/garages" />
                </Switch>
              </Suspense>
            </MainStyled>
          </AppStyled>
        </StoreProvider>
      </ThemeProvider>
    </Router>
  );
}

export { App };
