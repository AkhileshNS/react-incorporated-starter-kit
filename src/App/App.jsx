// External Modules
import React from 'react';
import {Global} from '@emotion/core';

// Global Styles
import {globalStyles} from 'global/styles';

// Local Styles
import {AppContainer} from 'App/App.styles';

const App = () => {
  return <AppContainer>
    <Global styles={globalStyles} />
    Hello World
  </AppContainer>;
}

export default App;
