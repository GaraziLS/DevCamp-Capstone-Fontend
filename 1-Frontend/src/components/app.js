import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/homepage";
import WhatsThis from "./pages/whats-this";
import CreatePage from "./pages/create";
import ErrorPage from "./pages/error-page";
import AuthPage from "./pages/auth"

import Navbar from "./project_components/navbar";
import Icons from "../helpers/icons"

export default class App extends Component {
  constructor() {
    super();

    Icons()
  }

  render() {
    return (
      <div className='app'>

        <Router>

          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/whats-this" component={WhatsThis} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/auth" component={AuthPage} />
            <Route component={ErrorPage} />
          </Switch>

        </Router>

      </div>
    );
  };
}