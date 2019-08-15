// External Modules
import React from 'react';
import {observer, inject} from 'mobx-react';
import dClone from 'lodash/cloneDeep';
import Router from 'react-regex-router';

// Local Styles and Controller
import {AppContainer} from './App.styles';
import Controller from 'App/App.controller';

// Pages
import Home from 'Home/Home';

// Global Functions
import {log} from 'global/functions';

// Routes
const routes = [{
  name: /^Home$/,
  component: Home
}]

const App = props => {
  log("[App] [Props] ", dClone(props));

  // By Value
  const {
    trigger = false,
    currRoute = "Home"
  } = dClone(props);

  return (
    <AppContainer>
      {trigger ? <Controller /> : null}
      <Router 
        currRoute={currRoute}
        routes={routes} 
      />
    </AppContainer>
  );
}

const mapStoresToProps = ({appStore}) => ({
  trigger: appStore.config.trigger,
  currRoute: appStore.config.currRoute
});

export default inject(mapStoresToProps)(observer(App));
