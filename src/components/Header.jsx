import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/CodeOne'>Hello World</Link></li>
          <li><Link to='/Cadastrar'>Cadastrar</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;