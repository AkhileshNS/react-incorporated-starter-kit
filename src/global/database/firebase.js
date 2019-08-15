// External Modules
import app from 'firebase/app';
import 'firebase/auth';

// Global Functions
import {log} from 'global/functions';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_DBNAME}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_DBNAME}.firebaseio.com`,
  projectId: `${process.env.REACT_APP_FIREBASE_DBNAME}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_DBNAME}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_APPID.split(":")[1],
  appId: process.env.REACT_APP_FIREBASE_APPID
}; 

log('[FIREBASE] [Initialization] Initialized Firebase App');
app.initializeApp(firebaseConfig);
export default app;

