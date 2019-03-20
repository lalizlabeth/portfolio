import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Project from './components/Project'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

class AppRouter extends Component {
  render() {
    return (
        <Router>
          <ScrollToTop>
            <div className="page-wrapper">
              <Switch>
                <Route path="/:id*" component={Navigation} />
                <Route component={Navigation} />
              </Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="*/project/" component={Project} />
            </div>
          </ScrollToTop>
        </Router>
    );
  }
}

export default AppRouter;
