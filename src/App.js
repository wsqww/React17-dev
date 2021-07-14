import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import JsxTest from "./pages/Jsx/jsx";

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
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => <h1>Welcome!</h1>} />
          <Route path="/jsx/:num" component={JsxTest} />
          {/* Redirect */}
          <Redirect from="/home" to="/" />
          {/*404 page*/}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>;
  }
}

export default App;
