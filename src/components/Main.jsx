import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './Home';
import ExempleCode from './ExempleCode';

function Main() {
  return (
    <main className="Main">
      <Switch className="Header">
        <Route exact path='/' component={Home} />
        <Route path='/CodeOne' component={ExempleCode} />
      </Switch>
    </main>
  );
}

export default Main;
