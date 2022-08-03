import React from 'react';
import appStoreImg from '../assets/appStore.svg';

export const PARTNER_ID = 'partnerId';
export const APP_STORE_LINK = 'https://www.apple.com/ru/app-store/';

export const DownloadPage: React.FC = () => (
  <div className="h-screen flex flex-row items-center justify-center">
    <a href={APP_STORE_LINK} className=""><img alt="App Store" src={appStoreImg} /></a>
  </div>
);
