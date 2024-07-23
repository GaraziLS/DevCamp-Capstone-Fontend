import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/homepage";
import WhatsThis from "./pages/whats-this";
import CreatePage from "./pages/create";
import ErrorPage from "./pages/error-page";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import GeneratorItem from "./pages/generator-item"

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
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/tables/:slug" component={GeneratorItem} />
            <Route component={ErrorPage} />
          </Switch>

        </Router>

      </div>
    );
  };
}