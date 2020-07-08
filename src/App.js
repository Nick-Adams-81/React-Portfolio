import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio";






function App() {
  return (

    <Router>
      <div>
      <Route exact path={["/React-Portfolio", "/"]} component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>

  )
}
export default App;

