import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./theme/GlobalStyles";
import Router from './pages/Router';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
