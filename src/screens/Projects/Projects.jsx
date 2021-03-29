import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import BarMenu from '../../components/BarMenu';
import Main from '../../components/Main';
import ContainerCard from '../../components/ContainerCard';

function Projects() {

  let { path } = useRouteMatch();

  return(
    <div className="Projects">

      <BarMenu />
      

      <div className="Projects__container-content">

      <div className="Projects__container-header">
        <h1 className="Projects__title">Galeria de Projetos</h1>
      </div>

      <ContainerCard />

      <Switch>
        <Route path={`${path}/:home`} component={ Main }></Route>
        
      </Switch>

      </div>

    </div>
  );
}

export default Projects;