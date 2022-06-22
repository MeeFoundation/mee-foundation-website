import { useAtom } from 'jotai';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthState } from 'src/state/AuthState';

interface PublicRouteProps {
  children: JSX.Element;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const [authState] = useAtom(AuthState);
  return (authState !== null) ? <Navigate to="/collections" /> : children;
};
