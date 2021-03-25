import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';

import { DefaultLayout } from '../components/layouts/default';
import Home from '../screens/Home';
import Trends from '../screens/Trends';
import Login from '../screens/Login';
import ConnectPeople from '../screens/ConnectPeople';
import Profile from '../screens/Profile';
import Messages from '../screens/Messages';

export const RouterConfig: React.FC = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <PrivateRoute path="/trends">
      <DefaultLayout IsVisibleSearchBox={true} IsVisibleWhoToFollow={true}>
        <Trends />
      </DefaultLayout>
    </PrivateRoute>
    <PrivateRoute path="/connect_people">
      <DefaultLayout IsVisibleSearchBox={true} IsVisibleTrendsForYou={true}>
        <ConnectPeople />
      </DefaultLayout>
    </PrivateRoute>
    <PrivateRoute path="/messages">
      <SocketProvider>
        <ConversationsProvider>
          <DefaultLayout IsVisibleChats={true}>
            <Messages />
          </DefaultLayout>
        </ConversationsProvider>
      </SocketProvider>
    </PrivateRoute>
    <PrivateRoute path="/user/:id">
      <DefaultLayout IsVisibleSearchBox={true} IsVisibleTrendsForYou={true} IsVisibleWhoToFollow={true}>
        <Profile />
      </DefaultLayout>
    </PrivateRoute>
    <PrivateRoute path="/">
      <DefaultLayout IsVisibleSearchBox={true} IsVisibleTrendsForYou={true} IsVisibleWhoToFollow={true}>
        <Home />
      </DefaultLayout>
    </PrivateRoute>
    <Route>
      <div>Sorry, that page doesn’t exist!</div>
    </Route>
  </Switch >
);


//           <Route path = "/home" component = { Home } />
//           <Route path="/user/:id" component={UserPage} exact />
//           <Route path="/user/activate/:hash" component={ActivatePage} exact />
