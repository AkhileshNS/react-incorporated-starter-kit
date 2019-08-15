// External Modules 
import {decorate, action, observable} from 'mobx';
import {persist, create} from 'mobx-persist';
import localForage from 'localforage';
import {isUObject} from 'elegant-standard';

// Global Functions
import {log} from 'global/functions';

class HomeStore {
  config = {}

  setConfig = config => {
    if (isUObject(config)) {
      for (let key in config) {
        if (key in this.config) {
          this.config[key] = config[key];
        }
      }
    }
  }
}

decorate(HomeStore, {
  config: [persist("object"), observable],

  setConfig: action
});

const hydrate = create({storage: localForage});
const homeStore = new HomeStore();
export default homeStore;
hydrate("homeStore", homeStore, () => log("[HomeStore] [Hydration] Successfully hydrated the store"))