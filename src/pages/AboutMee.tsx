import React from 'react';
import { NytHeader } from 'src/components/NytHeader';
import { useParams } from 'react-router-dom';
import NytSmallLogo from '../assets/nytSmallLogo.svg';
import MeeLogoBranded from '../assets/mee_logo.svg';
import appStoreImg from '../assets/appStore.svg';
import { LOCAL_STORAGE_WRITE_PAGE } from './DownloadPage';

export const AboutMeePage: React.FC = () => {
  const { partnerData } = useParams();
  return (
    <div className="min-h-screen">
      <NytHeader />
      <div className=" pt-38 px-4 flex flex-col justify-start items-center ">
        <img className="w-12" alt="The New York Times" src={NytSmallLogo} />
        <p className="max-w-86 pt-2 text-sm text-center text-[#5A5A5A]">
          The New York Times is a sponsor of The Mee Foundation. Mee provides a new, password-less,
          surveillance-free way to login to our site. It is free and easy to download and install.
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.href = `${LOCAL_STORAGE_WRITE_PAGE}${partnerData}`;
          }}
          className="pt-38"
        >
          <img alt="App Store" src={appStoreImg} />
        </button>
        <a href="https://mee.foundation/">
          <img className="pt-8" alt="Mee" src={MeeLogoBranded} />
        </a>

      </div>
    </div>
  );
};
