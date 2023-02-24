import React from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Header } from 'src/components/Header';
import { MaxW } from 'src/components/MaxW';
import appStoreImg from '../assets/appStore.svg';
import { APP_STORE_LINK, PARTNER_DATA } from './DownloadPage';

interface AboutMeePageProps {
  showQrCode?: boolean
}

export const AboutMeePage: React.FC<AboutMeePageProps> = ({ showQrCode = false }) => {
  const { partnerData } = useParams();

  return (
    <MaxW>
      <div className="min-h-screen">
        <Header />
        <div className=" pt-38 px-4 flex flex-col justify-start items-center ">
          {showQrCode ? (
            <div className="mb-38 flex flex-col justify-start items-center gap-8">
              <p className="max-w-86 pt-2 text-sm text-center pb-7 text-[#5A5A5A]">
                Please scan the QR code on your mobile phone or just click the button to download
                the Mee Identity Agent app
              </p>
              <QRCodeSVG value={window.location.href.replace('consent', 'cdconsent')} />
            </div>
          ) : (
            <p className="max-w-86 pt-2 text-sm text-center pb-12 text-[#5A5A5A]">
              Click the button to download the Mee Identity Agent app
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              try {
                if (partnerData) localStorage.setItem(PARTNER_DATA, partnerData);
              } finally {
                window.location.href = APP_STORE_LINK;
              }
            }}
            className=""
          >
            <img alt="App Store" src={appStoreImg} />
          </button>
        </div>
      </div>
    </MaxW>
  );
};
