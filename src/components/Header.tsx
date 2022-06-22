import clsx from 'clsx';
import { useAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthState } from 'src/state/AuthState';
import logo from '../assets/mee_logo.svg';

const LogoutButton: React.FC = () => (
  <Link className="text-primary text-base leading-3" to="/">Sign Out</Link>
);

export const Header: React.FC = () => {
  const [authState] = useAtom(AuthState);
  const logoutVisible = authState !== null;
  return (
    <div className={clsx(logoutVisible ? 'justify-between' : 'justify-start', 'header bg-primary-content max-w-full flex flex-row items-center border-b border-primary px-3.5 md:px-0')}>
      <img src={logo} alt="mee-logo" className="h-4 my-5" />
      {logoutVisible && <LogoutButton />}
    </div>
  );
};
