import React from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import BarMenu from '../../components/BarMenu';

import Main from '../../components/Main';

function Projects() {

  let { path } = useRouteMatch();

  return(
    <div className="Projects">

      <BarMenu />
      

      <div className="Projects__container-content">

        <Switch>
          <Route path={`${path}/:home`} component={ Main }></Route>
          
        </Switch>

      </div>

      
      

    </div>
  );
}

export default Projects;