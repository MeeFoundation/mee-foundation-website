import { useAtom } from 'jotai';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthState } from 'src/state/AuthState';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [authState] = useAtom(AuthState);
  return (authState === null) ? <Navigate to="/" /> : children;
};
