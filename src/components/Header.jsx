import React from "react";
import { Link } from "react-router-dom";

console.log(
  window.location.pathname
);

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/CodeOne'>Hello World</Link></li>
          <li><Link to='/login'>Cadastrar</Link></li>
          {/* {window.location.pathname !== "/login" ? <li><Link to="/login"><i className="sizeLogin">Login</i></Link></li> : ''} */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;