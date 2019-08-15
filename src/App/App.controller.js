// External Modules
import {Component} from 'react';

// Global Functions
import {log} from 'global/functions';

class Controller extends Component {
  componentDidMount() {
    log("[AppController] [Mounted] All side-effects (if any) will start to occur now");
  }
  
  render() {
    return null;
  }
}

export default Controller;