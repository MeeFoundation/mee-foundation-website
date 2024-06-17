import React from 'react';
// import { Link } from 'react-router-dom';
import head from '../assets/head.svg';
// import appStoreImage from '../assets/appStoreButton.svg';

export const Footer: React.FC = () => (
  <div className="items-shrink footer relative mt-16 flex max-w-full flex-col">
    <div className="z-10 flex w-full flex-col items-center bg-primary">
      <div className="w-full px-4 py-5">
        <div className="text-2xs flex flex-col items-center justify-between gap-4 leading-3 text-primary-content md:flex-row md:text-sm">
          <p className="leading-4">
            <a href="/privacy-policy">Privacy Policy</a> |{' '}
            {/* <a href="https://docs.mee.foundation/">Docs</a> |{' '} */}
            {/* <Link to="/support">Support</Link> */}
          </p>
          <p className="leading-4">© 2024 The Mee Foundation, Inc.</p>
          <div className="w-50 hidden md:block" />
          {/* <img alt="App Store" src={appStoreImage} /> */}
        </div>
      </div>
    </div>
    <img
      src={head.src}
      alt="mee-illustration-2"
      className="absolute -top-7 left-0 right-0 m-auto h-21 w-23"
    />
  </div>
);
