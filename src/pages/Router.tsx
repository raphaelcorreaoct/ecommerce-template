import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import Product from "./product";

const RouterPages = () => {
  return (
    <Router>
      <Switch>
        <Route path="/produto">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterPages;
