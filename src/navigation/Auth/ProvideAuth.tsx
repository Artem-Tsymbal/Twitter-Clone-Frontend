import React from 'react';
import { IUseProvideAuth, useProvideAuth } from './useProvideAuth';

interface ProvideAuthProps {
  children?: React.ReactNode;
}

const authContext = React.createContext<IUseProvideAuth | undefined>(undefined);

export const ProvideAuth: React.FC<ProvideAuthProps> = ({ children }: ProvideAuthProps) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export function useAuth(): IUseProvideAuth | undefined {
  const context = React.useContext(authContext);

  if (context !== undefined) {
    return context;
  }

  return undefined;
}
