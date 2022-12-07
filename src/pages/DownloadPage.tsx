import React from 'react';
import { useParams } from 'react-router-dom';
import { MaxW } from 'src/components/MaxW';
import appStoreImg from '../assets/appStore.svg';

export const PARTNER_DATA = 'partnerData';
export const APP_STORE_LINK = 'itms-beta://';
export const LOCAL_STORAGE_WRITE_PAGE = 'https://www-dev.mee.foundation/#/redirect/';

export const DownloadPage: React.FC = () => {
  const { partnerData } = useParams();
  return (
    <MaxW>
      <div className="h-screen flex flex-row items-center justify-center">
        <button
          type="button"
          onClick={() => {
          // navigator.clipboard.writeText(window.location.href);
            try {
              if (typeof partnerData !== 'undefined') localStorage.setItem(PARTNER_DATA, partnerData);
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
};
