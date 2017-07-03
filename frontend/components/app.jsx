import React from 'react';
import { Switch, Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './auth/session_form_container';
import Home from './home';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
