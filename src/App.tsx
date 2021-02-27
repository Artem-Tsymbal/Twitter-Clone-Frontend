import React from 'react';
import { ProvideAuth } from './navigation/Auth/ProvideAuth';
import { RouterConfig } from './navigation/RouterConfig';

export const App: React.FC = (): React.ReactElement => (
  <ProvideAuth>
    <RouterConfig />
  </ProvideAuth>
);

export default App;
