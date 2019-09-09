// External Modules
import React from 'react';
import {Global} from '@emotion/core';
import {inject, observer} from 'mobx-react';

// Global Styles and Functions
import {globalStyles} from 'global/styles';
import {log} from 'global/functions';

// Local Styles
import {AppContainer} from 'App/App.styles';

const App = props => {
  log("[App] [props]", props);

  return <AppContainer>
    <Global styles={globalStyles} />
    Hello World
  </AppContainer>;
}

const mapModelsToProps = ({appConfig}) => ({
  trigger: appConfig.trigger,
  currRoute: appConfig.currRoute
})
export default inject(mapModelsToProps)(observer(App));
