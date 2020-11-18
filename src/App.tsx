import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import rootStore from "./store";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Provider store={rootStore}>
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">
              PartyWall
            </Link>
            <ul className="nav justify-content-end">
              <li className="nav-item ml-4">
                <Link to="/register">Sign up</Link>
              </li>
              <li className="nav-item ml-4">
                <Link to="/login">Sign in</Link>
              </li>
            </ul>
          </nav>

          <div className="container mt-4">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
