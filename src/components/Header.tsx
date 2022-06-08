import React from 'react';
import logo from '../assets/mee_logo.svg';

export const Header: React.FC = () => (
  <div className="header max-w-full flex flex-row justify-start">
    <img src={logo} alt="mee-logo" className="h-4 mx-3.5 md:ml-0 my-5" />
  </div>
);
