import React, { Fragment } from "react";

import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';

import Child1 from './child/child1';
import Child2 from './child/child2';


export default function RouterTest() {
  const {url, path} = useRouteMatch();
  console.log(url, path);
  return (
    <Fragment>
      RouterTest
      <nav>
        <ul>
          <li><Link to={`${url}/child1`}>child1</Link></li>
          <li><Link to={`${url}/child2`}>child2</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/child1`} component={Child1} />
        <Route path={`${path}/child2`} component={Child2} />
      </Switch>
    </Fragment>
  );
}
