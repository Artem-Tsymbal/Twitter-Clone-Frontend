import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { LoadingStatus } from '../../store/ducks/types';
import { selectIsAuth, selectUserStatus } from '../../store/ducks/user/selectors';


interface IPrivateRouteProps {
  children: React.ReactChild;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  children,
  ...rest
}: IPrivateRouteProps) => {
  const isAuthed = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
  return (
    <Route {...rest} render={({ location }) => {
      if (!isReady) {
        return (
          <div>LOADING</div>
        );
      }

      return (isAuthed && isReady) === true
        ? children
        : <Redirect to={{
          pathname: "/login",
          state: { from: location },
        }} />;
    }} />
  );
};

export default PrivateRoute;
