import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="Home">
      <div className="Home__content">
        <div className="Home__title">
          <h1 className="Home__title-text">Olá! Bem vindo</h1>
          <hr/>
          <p className="Home__sub-title-text">
            Portfolio de estudos
          </p>
          <hr/>
        </div>

        <Link to="/projects">
          <span className="Home__galaxy-points"></span>
          <span className="Home__galaxy-points"></span>
          <span className="Home__galaxy-points"></span>
        </Link>
        
        
      </div>
    </div>
  );
}

export default Home;