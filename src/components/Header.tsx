import clsx from 'clsx';
import { useAtom, useSetAtom } from 'jotai';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from 'src/state/AuthState';
import logo from '../assets/mee_logo.svg';

const LogoutButton: React.FC = () => {
  const setAuthState = useSetAtom(AuthState);
  return (
    <button
      type="button"
      className="text-primary text-base leading-3"
      onClick={() => {
        setAuthState(null);
      }}
    >
      Sign Out
    </button>
  );
};

export const Header: React.FC = () => {
  const [authState] = useAtom(AuthState);
  const logoutVisible = authState !== null;
  const navigate = useNavigate();
  return (
    <div className={clsx(logoutVisible ? 'justify-between' : 'justify-start', 'header bg-primary-content max-w-full flex flex-row items-center border-b border-primary px-3.5 md:px-0')}>
      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={logo} alt="mee-logo" className="h-4 my-5" />
      </button>
      {logoutVisible && <LogoutButton />}
    </div>
  );
};