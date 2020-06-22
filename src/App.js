import React from 'react';
import "./App.css";

import { Link, BrowserRouter as Router, Route, Redirect, Switch, useLocation, useHistory } from "react-router-dom";
import { Users, Location, Match } from './resources/objects';


const LandingPage = () => {
  return <h3>Landing Page</h3>;
};

const AboutPage = () => {
  return <h3>About Page</h3>;
};

// React router pass two props to all the component
const UsersPage = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <>
      <h3>Users Page</h3>
      {Users.map((users, index) => (
        <h5 key={index}>
          {/* passing a dynamic route params to the component */}
          <Link to={`/user/${index + 1}`}>{users.name}'s Page (state) </Link>
        </h5>
      ))}
      <p>
        <strong>Match Props: </strong>
        <code>{JSON.stringify(Match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props: </strong>
        <code>{JSON.stringify(Location, null, 2)}</code>
      </p>
      <p>Current URL: {pathname}</p>
      <button onClick={() => history.push('/about') } >Go to home</button>
    </>
  );
};

const UserPage = ({ match, location }) => {
  //  destructuring the object when landing on new url route
  const {
    params: { userId }
  } = match;

  console.table(match);

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {Users[userId - 1].name}
      </p>
    </>
  );
};

// passing props to the route component directly.
const PropsPage = ({ title }) => {
  return (
    <h3>{title}</h3>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <main>
          <nav>
            <ul>
              <li><Link to="/">Landing</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/props-through-render">Props through render</Link></li>
              <li><Link to="/404">Redirecting to New page</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/user/:userId" component={UserPage} />
            {/* Passing function as a component props in Route component using recommended props-through-render */}
            <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} />

            <Redirect exact from="/redirecting" to="/404" />
            <Route exact path="/404" render={() => <h1>404: page not found</h1>} />
          </Switch>
        </main>
      </Router>
    </section>
  );
};

export default App;
