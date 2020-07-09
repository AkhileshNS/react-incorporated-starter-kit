import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import pages from 'pages/index';
import Controller from './App.controller';
import { Store } from 'App/App.store';
import { Container } from './App.styles';

const App = () => {
  return (
    <Store.Provider>
      <Container>
        <Controller />
        <BrowserRouter>
          {pages.map((page, i) => (
            <Route {...page} key={'page ' + i} />
          ))}
        </BrowserRouter>
      </Container>
    </Store.Provider>
  );
};

export default App;
