import React from 'react';
import { IUseProvideAuth, useProvideAuth } from './useProvideAuth';

interface IProvideAuthProps {
  children?: React.ReactNode;
}

interface IWarningObject extends IUseProvideAuth {
  readonly foo: void;
}

const warningObject: IWarningObject = {
  isAuthenticated: () => false,
  logOut: () => ({}),
  updateCurrentUserState: () => ({}),
  get foo() {
    throw new Error('You probably forgot to put <UseProvideAuth>.');
  },
};

const authContext = React.createContext<IUseProvideAuth | IWarningObject>(warningObject);

export const ProvideAuth: React.FC<IProvideAuthProps> = ({ children }: IProvideAuthProps) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export function useAuth(): IUseProvideAuth {
  const context = React.useContext(authContext);
  return context;
}
