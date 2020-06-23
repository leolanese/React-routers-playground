import React from 'react';

import { Link, BrowserRouter as Router, useParams, Route, Switch, useRouteMatch } from "react-router-dom";

export const Nestings = () => {
  // `path` = lets us build <Route> paths that are relative to the parent route,
  // `url` = lets us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Nesting Routers:</h2>
      <ul>
        <li>
          <Link to={`${url}/Option1`}>Options 1</Link>
        </li>
        <li>
          <Link to={`${url}/Option2`}>Option 2</Link>
        </li>
        <li>
          <Link to={`${url}/Option3`}>Option 3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:nestingId`}>
          <Nesting />
        </Route>
      </Switch>
    </div>
  );
}

function Nesting() {
  let { nestingId } = useParams();

  return (
    <div>
      <h3>Option selected: {nestingId}</h3>
    </div>
  );
}