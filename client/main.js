import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../imports/ui/app';
import Login from '../imports/ui/user/login';

const browserHistory = createBrowserHistory();

injectTapEventPlugin();

const renderRoutes = () => (
  <Router history={browserHistory}>
    <MuiThemeProvider>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </div>
    </MuiThemeProvider>
  </Router>
);

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});