import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Reducer from "./redux/reducers.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

const store = createStore(Reducer);

// This file renders the entire react app to the HTML to show it in the browser
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
