import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { Home } from './pages/Home/index';
import { useHomeStyles } from './pages/Home/theme';
import { SignIn } from './pages/SignIn';
import { LoadingStatus } from './store/types';
import { fetchDataOfUser } from './store/ducks/user/actionCreators';
import { selectIsUserAuthed, selectStatusOfUser } from './store/ducks/user/selectors';
import { Layout } from './pages/Layout';
import { ActivatePage } from './pages/ActivatePage';
import { UserPage } from './pages/User';
import { Home } from './screens/Home';
import { DefaultLayout } from './components/layouts/default';
import { RouterConfig } from './navigation/RouterConfig';
import { ProvideAuth } from './navigation/Auth/ProvideAuth';

export const App: React.FC = (): React.ReactElement => (


  // if (!isReady) {
  //   return (
  //     <div className={classes.centered}>
  //       <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
  //     </div>
  //   );
  // }


  <>
    <ProvideAuth>
      <RouterConfig />
    </ProvideAuth>

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

)
  ;

export default App;
