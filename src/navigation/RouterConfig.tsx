import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';

import { DefaultLayout } from '../components/layouts/default';
import { Home } from '../screens/Home';
import { Trends } from '../screens/Trends';
import Login from '../screens/Login';

export const RouterConfig: React.FC = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <PrivateRoute path="/trends">
      <DefaultLayout
        IsVisibleTrendsForYou={false}
        IsVisibleWhoToFollow={true}>
        <Trends />
      </DefaultLayout>
    </PrivateRoute>
    <PrivateRoute path="/">
      <DefaultLayout
        IsVisibleTrendsForYou={true}
        IsVisibleWhoToFollow={true}>
        <Home />
      </DefaultLayout>
    </PrivateRoute>
    <PrivateRoute exact path="/user/:id">
      <div>USER PAGE</div>
    </PrivateRoute>
    <Route>
      <div>Sorry, that page doesn’t exist!</div>
    </Route>
  </Switch >
);


//           <Route path = "/home" component = { Home } />
//           <Route path="/user/:id" component={UserPage} exact />
//           <Route path="/user/activate/:hash" component={ActivatePage} exact />
