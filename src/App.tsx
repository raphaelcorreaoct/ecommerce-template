import React from "react";
import { GlobalStyle } from "./theme/GlobalStyles";
import Router from "./pages/Router";

import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
