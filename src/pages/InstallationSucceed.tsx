import React, { useEffect } from 'react';
import { PARTNER_ID } from './DownloadPage';

export const InstallationSucceed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk-dev.getmee.org/mee-sdk.js';
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      try {
        const localStoragePartnerId = localStorage.getItem(PARTNER_ID);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).MeeWebSDK.initButton({ partnerId: localStoragePartnerId, containerId: 'meeButton' });
        // localStorage.removeItem(PARTNER_ID);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="h-screen w-screen bg-primary">
      <div className="text-white font-semibold flex flex-col max-w-150 items-center justify-center h-screen mx-auto">
        <p>Installation Succeeded</p>
        <p>Click to continue logging in to New York Times</p>
        <div id="meeButton" className="mt-9" />
      </div>
    </div>

  );
};
