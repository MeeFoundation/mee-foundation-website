import React from 'react';
// import { Link } from 'react-router-dom';
import head from '../assets/head.svg';
// import appStoreImage from '../assets/appStoreButton.svg';

export const Footer: React.FC = () => (
  <div className="footer mt-16 max-w-full flex flex-col items-shrink relative">
    <div className="w-full bg-primary flex flex-col items-center z-10">
      <div className="w-full px-4 py-5">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center text-2xs md:text-sm leading-3 text-primary-content">
          <p className="leading-4">
            <a href="/privacy-policy">Privacy Policy</a>
            {' '}
            |
            {' '}
            <a href="https://docs-dev.mee.foundation/">Docs</a>
            {' '}
            |
            {' '}
            {/* <Link to="/support">Support</Link> */}
          </p>
          <p className="leading-4">
            © 2023 The Mee Foundation, Inc.
          </p>
          <div className="w-50 hidden md:block" />
          {/* <img alt="App Store" src={appStoreImage} /> */}
        </div>
      </div>
    </div>
    <img src={head.src} alt="mee-illustration-2" className="w-23 h-21 absolute -top-7 right-0 left-0 m-auto" />
  </div>
);