import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Routes
import Home from './screens/Home/Home';
import Projects from './screens/Projects/Projects'

function Routes() {
  return (
    <BrowserRouter className="Header">
      <Route path='/' component={ Home } exact />
      <Route path='/Projects' component={ Projects } />
    </BrowserRouter>
  );
}

export default Routes;
