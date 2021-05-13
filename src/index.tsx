import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./theme/GlobalStyles";
import Router from "./pages/Router";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
