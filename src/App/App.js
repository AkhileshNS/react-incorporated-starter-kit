// External Modules
import React from 'react';
import {observer, inject} from 'mobx-react';
import {derive} from 'elegant-standard';

// Local Styles
import {AppContainer} from './App.styles';

const App = () => {
  return (
    <AppContainer>
    </AppContainer>
  );
}

const mapStoresToProps = derive({});

export default inject(mapStoresToProps)(observer(App));
