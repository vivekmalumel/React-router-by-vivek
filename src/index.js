import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./components/LandingPage";
import AppLayout from "./components/App.Layout";
import { ProtectedRoute } from "./components/protected.route";
import { BrowserRouter, Route, Switch,NavLink } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/app">App</NavLink></li>
    </ul>
      <h1>Hello CodeSandbox</h1>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 Not Found"} />
      </Switch>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
