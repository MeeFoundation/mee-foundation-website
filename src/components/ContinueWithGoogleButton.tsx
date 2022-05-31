import React, { MouseEventHandler } from 'react';
import googleLogo from '../assets/google_logo.svg';

interface ContinueWithGoogleButtonProps {
  onClick: () => void;
}

export const ContinueWithGoogleButton: React.FC<ContinueWithGoogleButtonProps> = () => {
  const loginWithGoogle: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    window.open('http://localhost:5000/api/v1.0/auth/', '_self');
  };

  return (
    <button className="flex py-3 px-10 bg-white items-center gap-2" type="button" onClick={loginWithGoogle}>
      <img alt="google logo" src={googleLogo} />
      <p className="text-google-font-color text-sm font-bold">Continue with Google</p>
    </button>
  );
};
