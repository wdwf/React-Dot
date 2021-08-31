import React from "react";

function MainTest(props) {
  return (
    <div className="main">
      <h1>Testando as rotas com react router</h1>
      {props.children}
    </div>
  );
}

export default MainTest;