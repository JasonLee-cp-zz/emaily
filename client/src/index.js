//TODO: import materialize css
//TODO: see doc => npm install materialize-css
import "materialize-css/dist/css/materialize.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";

//below is very temporary for testing - console창에서 axios
import axios from "axios";
window.axios = axios;

//TODO: Action Creator

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const index = () => {
  return <div></div>;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// console.log("STRIP KEY IS", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is ", process.env.NODE_ENV);
