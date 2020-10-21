import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import Sessions from "./Sessions.js";
import SideBar from "../sidebar";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <SideBar />

        <Router>
          <Switch>
            <Route path="/sessions">
              <Sessions />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
