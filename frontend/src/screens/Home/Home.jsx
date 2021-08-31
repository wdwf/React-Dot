import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div className="Home">
      <div className="Home__content">
        <div className="Home__title">
          <h1 className="Home__title-text">Welley Ferreira</h1>
          <hr/>
          <p className="Home__sub-title-text">
            Portfolio de estudos
          </p>
          <hr/>
        </div>

        <Link to="/projects"><div className="Home__galaxy-points"></div></Link>
        
        
      </div>
    </div>
  );
}

export default Home;