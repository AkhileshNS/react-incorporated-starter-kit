// External Modules
import React from 'react';
import { inject, observer } from 'mobx-react';

// Local Styles
import {HomeContainer} from './Home.styles';

const Home = () => {
  return <HomeContainer>
    Home Page
  </HomeContainer>;
}

const mapStoresToProps = ({}) => ({});
export default inject(mapStoresToProps)(observer(Home));