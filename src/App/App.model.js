// External Modules
import { types } from 'mobx-state-tree';
import localForage from 'localforage';
import { persist } from 'mst-persist';

// Global Functions
import {log} from 'global/functions';

export const appConfig = types
  .model('appConfig', {
    trigger: false,
    currRoute: "home"
  })
  .create();

persist('appConfig', appConfig, {
  storage: localForage
}).then(() => log("[App:config] [hydration] Successfully hydrated config model"));