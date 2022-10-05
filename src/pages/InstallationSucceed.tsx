/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { Fallback } from 'src/components/Fallback';
import { PARTNER_DATA } from './DownloadPage';
import { Landing } from './LandingPage';
import MeeLogo from '../assets/mee_logo.svg';
import LockImage from '../assets/lock.svg';
// import MeeButtonIcon from '../assets/meeButtonActive.svg';

const OpenAppButton: React.FC = () => (
  <div />
  // <button type="button" className="shadow-lg flex flex-row gap-3 justify-center items-center border-3 border-primary pr-4 pl-2 py-2 bg-white">
  //   <img alt="Mee" src={MeeButtonIcon} className="h-8" />
  //   <p className="text-primary text-sm font-bold">Open Mee</p>
  // </button>
);

interface ContextExistsProps {
  partnerData: string;
}

const ContextExists: React.FC<ContextExistsProps> = ({ partnerData }) => {
  const partnerDataUnparsed: {
    partnerName: string,
    partnerUrl: string,
    partnerDisplayUrl: string } = useMemo(() => {
    try {
      return JSON.parse(atob(partnerData));
    } catch {
      window.location.href = '/';
      return { partnerName: '', partnerUrl: '', partnerDisplayedUrl: '' };
    }
  }, [partnerData]);

  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-start pt-32 text-primary items-center px-5 text-center">
      <img className="h-12 mb-22" alt="mee" src={MeeLogo} />

      <h1 className="pb-10 text-2xl font-bold">Congratulations on installing Mee!</h1>
      <p className="text-lg font-medium">You are going to be redirected to</p>
      <p className="text-3xl text-alt-color-8 font-bold">{partnerDataUnparsed.partnerName}</p>
      <div className="flex flex-row gap-3 pb-10">
        <img alt="lock" src={LockImage} className="w-4" />
        <p className="text-3xl font-bold">{partnerDataUnparsed.partnerDisplayUrl}</p>
      </div>

      <button
        type="button"
        className="py-2 px-4 bg-primary text-sm font-bold text-white"
        onClick={() => {
          window.location.href = `https://www.getmee.org/#/consent/${partnerData}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // (window as any).MeeWebSDK.buttonAction(partnerId);
        }}
      >
        Go Now
      </button>

    </div>
  );
};

const ContextDoesNotExist: React.FC = () => <Landing appButton={OpenAppButton} />;

export const InstallationSucceed: React.FC = () => {
  const [partnerData, setPartnerData] = useState<string | undefined | null>(undefined);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk-dev.getmee.org/mee-sdk.js';
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      try {
        const localStoragePartnerId = localStorage.getItem(PARTNER_DATA);
        setPartnerData(localStoragePartnerId);
        // localStorage.removeItem(PARTNER_ID);
      } catch (e) {
        setPartnerData(null);
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {typeof partnerData !== 'undefined'
        ? partnerData !== null
          ? <ContextExists partnerData={partnerData} /> : <ContextDoesNotExist />
        : <Fallback />}
    </div>
  );
};
