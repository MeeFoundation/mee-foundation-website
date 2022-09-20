import React from 'react';
import { MaxW } from 'src/components/MaxW';
import appStoreImg from '../assets/appStore.svg';

export const PARTNER_ID = 'partnerId';
export const APP_STORE_LINK = 'itms-beta://';

export const DownloadPage: React.FC = () => (
  <MaxW>
    <div className="h-screen flex flex-row items-center justify-center">
      <button
        type="button"
        onClick={() => {
          // navigator.clipboard.writeText(window.location.href);
          try {
            localStorage.setItem(PARTNER_ID, 'NYT');
          } finally {
            window.location.href = APP_STORE_LINK;
          }
        }}
        className=""
      >
        <img alt="App Store" src={appStoreImg} />
      </button>
    </div>
  </MaxW>
);
