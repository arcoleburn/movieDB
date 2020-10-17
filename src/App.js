import React from "react";
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
///styles
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/:movieId">
        <Movie />
      </Route>
      <Route  path="/*">
        <NotFound />
      </Route>
    </Switch>
    {/* <Home /> */}
    <GlobalStyle />
  </Router>
);

export default App;
