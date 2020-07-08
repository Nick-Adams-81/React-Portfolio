import React from 'react';
import { Route , HashRouter, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio";







function App() {
  
    return (
    <HashRouter basename='/'>
      <div>
      {/*
      A <Switch> looks through all children <Route>
      elements and renders the first one whose path
      matches the current URL.
      */}


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route component={Home} />
      </Switch>
      </div>
    </HashRouter>

  )
}
export default App;

