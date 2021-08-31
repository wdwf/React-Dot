import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import BarMenu from '../../components/BarMenu/BarMenu';
import ContainerCard from '../../components/ContainerCard/ContainerCard';

function Projects() {

  let { path } = useRouteMatch();

  return(
    <div className="Projects">

      <BarMenu />
      

      <div className="Projects__container-content">
      
        <Switch>
          
          <Route path={`${path}/:codes`} component={ ContainerCard }></Route>
          
        </Switch>

      </div>

    </div>
  );
}

export default Projects;