import clsx from 'clsx';
import React from 'react';
import logo from '../assets/mee_logo.svg';

const LogoutButton: React.FC = () => {
  return (
    <button
      type="button"
      className="py-2 text-base leading-3 text-primary"
      onClick={() => {
        // setAuthState(null);
      }}
    >
      Sign Out
    </button>
  );
};

export const Header: React.FC = () => {
  const [authState] = [null];
  const logoutVisible = authState !== null;
  return (
    <div
      className={clsx(
        logoutVisible ? 'justify-between' : 'justify-start',
        'header flex max-w-full flex-row items-center border-b border-primary bg-primary-content px-3.5 lg:px-0',
      )}
    >
      <button
        type="button"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <img src={logo} alt="mee-logo" className="my-5 h-4" />
      </button>
      {logoutVisible && <LogoutButton />}
    </div>
  );
};
