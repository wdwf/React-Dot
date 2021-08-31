import React from "react";
import { Link } from "react-router-dom";

console.log(
  window.location.pathname
);

function MenuTest() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Level1'>Level 1</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
          {/* {window.location.pathname !== "/login" ? <li><Link to="/login"><i className="sizeLogin">Login</i></Link></li> : ''} */}
        </ul>
      </nav>
    </header>
  );
}

export default MenuTest;