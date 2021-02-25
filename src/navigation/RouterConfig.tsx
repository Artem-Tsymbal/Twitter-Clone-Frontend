import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import { Home } from "../screens/Home";
import { DefaultLayout } from "../components/layouts/default";
import { SignIn } from "../pages/SignIn";

export const RouterConfig: React.FC = () => {
  return (
    <Switch>
      <Route path="/login">
        <SignIn />
      </Route>
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
};
