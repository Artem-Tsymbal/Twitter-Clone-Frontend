import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
//import { Home } from './pages/Home/index';
import { useHomeStyles } from './pages/Home/theme';
import { SignIn } from './pages/SignIn';
import { LoadingStatus } from './store/ducks/types';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { Layout } from './pages/Layout';
import { ActivatePage } from './pages/ActivatePage';
import { UserPage } from './pages/User';
import { Home } from './screens/Home';
import { DefaultLayout } from './components/layouts/default';
import { RouterConfig } from './navigation/RouterConfig';

export const App: React.FC = (): React.ReactElement => {
  // const classes = useHomeStyles();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);
  // const loadingStatus = useSelector(selectUserStatus);
  // const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  // React.useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  // React.useEffect(() => {
  //   console.log({ isAuth, isReady });
  //   if (!isAuth && isReady) {
  //     history.push('/signin');
  //   } else if (history.location.pathname === '/') {
  //     history.push('/home');
  //   }
  // }, [isAuth, isReady]);

  // if (!isReady) {
  //   return (
  //     <div className={classes.centered}>
  //       <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
  //     </div>
  //   );
  // }

  return (
    <>
      <RouterConfig />
      {/* <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <DefaultLayout />
       <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={UserPage} exact />
          <Route path="/user/activate/:hash" component={ActivatePage} exact />

        </Layout>
      </Switch>
    </div> */}
    </>

  );
};

export default App;
