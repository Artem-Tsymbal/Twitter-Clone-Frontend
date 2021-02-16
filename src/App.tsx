import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { SignIn } from './pages/SignIn';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

export const App: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      // history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

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
