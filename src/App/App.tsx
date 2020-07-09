import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import pages from 'pages/index';
import Controller from './App.controller';

const App = () => {
  return (
    <div>
      <Controller />
      <BrowserRouter>
        {pages.map((page, i) => (
          <Route {...page} key={'page ' + i} />
        ))}
      </BrowserRouter>
    </div>
  );
};

export default App;
