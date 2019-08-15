// External Modules
import React from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';

// Global DB Instance
import firebase from 'global/database/firebase';

export const getFirebaseLogin = () => (
  <StyledFirebaseAuth
    uiConfig={{
      signInSuccessUrl: '/',
      signInFlow: 'redirect',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }}
    firebaseAuth={firebase.auth()}
  />
);