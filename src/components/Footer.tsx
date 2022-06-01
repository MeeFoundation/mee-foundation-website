import React from 'react';
import head from '../assets/head.svg';

export const Footer: React.FC = () => (
  <div className="footer mt-16 max-w-full flex flex-col items-shrink relative">
    <div className="w-full bg-primary flex flex-col items-center z-10">
      <div className="w-full px-4 py-4">
        <div className="flex basis-2/3 flex-col justify-start text-2xs md:text-sm leading-3 text-primary-content">
          <p>
            The Mee project is sponsored by the
            Mee Foundation, a 501(c)(4) non-profit corporation
          </p>
          <p className="mt-5">
            © 2022 Mee Foundation, Inc.
          </p>
        </div>
      </div>
    </div>
    <img src={head} alt="mee-illustration-2" className="w-24 absolute -top-5 right-0 left-0 m-auto" />
  </div>
);
