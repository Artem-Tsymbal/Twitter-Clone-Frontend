import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Home } from './pages/Home/index';
import { useHomeStyles } from './pages/Home/theme';
import { SignIn } from './pages/SignIn';
import { LoadingStatus } from './store/ducks/types';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';

export const App: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else {
      //  history.push('/home');
    }
  }, [isAuth, isReady]);

  if (!isReady) {
    <div className={classes.centered}>
      <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
    </div>;
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
