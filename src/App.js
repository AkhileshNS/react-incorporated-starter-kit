
// External Modules
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Internal Components
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>;
  }
}

export default App;
