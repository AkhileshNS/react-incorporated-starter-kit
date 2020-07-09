import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import pages from 'pages/index';
import Controller from './App.controller';
import { Store } from 'App/App.store';

const App = () => {
  return (
    <Store.Provider>
      <div>
        <Controller />
        <BrowserRouter>
          {pages.map((page, i) => (
            <Route {...page} key={'page ' + i} />
          ))}
        </BrowserRouter>
      </div>
    </Store.Provider>
  );
};

export default App;
