import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/portfolio";






function App() {
  return (
    
    <Router>
      <Route exact path={["/React-Portfolio", "/"]} component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Router>
   
  )
}
export default App;

