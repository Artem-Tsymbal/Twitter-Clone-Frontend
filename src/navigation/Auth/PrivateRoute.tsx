import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './ProvideAuth';

interface IPrivateRouteProps {
  children: React.ReactChild;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  children,
  ...rest
}: IPrivateRouteProps) => {
  const isAuthed = useAuth().isAuthenticated();

  return (
    <Route {...rest} render={({ location }) => isAuthed === true
      ? children
      : <Redirect to={{
        pathname: '/login',
        state: { from: location },
      }} />} />
  );
};

export default PrivateRoute;
