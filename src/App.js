import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import JsxTest from "./pages/Jsx/jsx";
import RouterTest from './pages/routerTest/routerTest';
import G2demo from './pages/g2Demo/g2Demo';

class App extends React.Component {
  render() {
    const num = 2;
    return <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/jsx/${num}`}>Jsx</Link></li>
            <li><Link to={`/home`}>"/home" redirect to "/"</Link></li>
            <li><Link to={`/router_test`}>Router Test</Link></li>
            <li><Link to={`/g2`}>g2 demo</Link></li>
          </ul>
        </nav>
        <div className="main">
          <Switch>
            <Route path="/" exact render={() => <h1>Welcome!</h1>} />
            <Route path="/jsx/:num" component={JsxTest} />
            <Route path="/router_test" component={RouterTest} />
            <Route path="/g2" component={G2demo} />
            {/* Redirect */}
            <Redirect from="/home" to="/" />
            {/*404 page*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </div>;
  }
}

export default App;
