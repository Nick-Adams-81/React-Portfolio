import React from 'react';
import { BrowserRouter as Route, HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio";







function App() {
  
    return (
    <HashRouter basename='/'>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </HashRouter>

  )
}
export default App;

