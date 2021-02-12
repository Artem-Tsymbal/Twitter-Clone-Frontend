import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { SignIn } from './pages/SignIn';

export const App: React.FC = (): React.ReactElement => (
  <div className="App">
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
