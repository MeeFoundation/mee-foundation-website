import clsx from 'clsx';
// import { useSetAtom } from 'jotai';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MeeAuthState } from 'src/state/MeeAuthState';
import logo from '../assets/mee_logo.svg';

const LogoutButton: React.FC = () => {
  // const setAuthState = useSetAtom(MeeAuthState);
  return (
    <button
      type="button"
      className="text-primary text-base leading-3 py-2"
      onClick={() => {
        // setAuthState(null);
      }}
    >
      Sign Out
    </button>
  );
};

export const Header: React.FC = () => {
  const [authState] = [null];// useAtom(MeeAuthState);
  const logoutVisible = authState !== null;
  // const navigate = useNavigate();
  return (
    <div className={clsx(logoutVisible ? 'justify-between' : 'justify-start', 'header bg-primary-content max-w-full flex flex-row items-center border-b border-primary px-3.5 lg:px-0')}>
      <button
        type="button"
        onClick={() => {
          // navigate('/');
        }}
      >
        <img src={logo} alt="mee-logo" className="h-4 my-5" />
      </button>
      {logoutVisible && <LogoutButton />}
    </div>
  );
};
