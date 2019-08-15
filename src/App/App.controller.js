// External Modules
import {Component} from 'react';

// Global Functions and Database
import {log} from 'global/functions';
// import db from 'global/database';

class Controller extends Component {
  componentDidMount() {
    log("[AppController] [Mounted] All side-effects (if any) will start to occur now");
  }
  
  render() {
    return null;
  }
}

export default Controller;