import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function RoutesTest(props) {
  return (
    <div className="main">
      <h1>Testando as rotas com react router</h1>
      {props.children}
    </div>
  );
}

export default RoutesTest;