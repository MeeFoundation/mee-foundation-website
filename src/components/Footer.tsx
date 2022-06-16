import React from 'react';
import head from '../assets/head.svg';

export const Footer: React.FC = () => (
  <div className="footer mt-16 max-w-full flex flex-col items-shrink relative">
    <div className="w-full bg-primary flex flex-col items-center z-10">
      <div className="w-full px-4 py-5">
        <div className="flex-col justify-start text-2xs md:text-sm leading-3 text-primary-content">
          <p className="leading-4">
            © 2022 The Mee Project, Inc.
          </p>
        </div>
      </div>
    </div>
    <img src={head} alt="mee-illustration-2" className="w-23 h-21 absolute -top-7 right-0 left-0 m-auto" />
  </div>
);
