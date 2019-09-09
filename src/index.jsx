// External Modules
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'mobx-react';

// Tailwind
import "global/tailwind.out.css"

// Internal Components
import App from 'App/App';
import * as serviceWorker from "./serviceWorker";

// MST Models
import * as models from 'models';

const app = <Provider {...models}>
  <App />
</Provider>;

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
