/* eslint-disable no-console */
import React, { useEffect, useMemo } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Header } from '../components/Header';
import { MaxW } from '../components/MaxW';
import type { RequestData } from '../model/partnerItem';
import { decodeJwt } from 'jose';
import { PollApi } from '../api/common';
import appStoreImg from '../assets/appStore.svg';
import { APP_STORE_LINK, PARTNER_DATA } from '../../constants';


interface AboutMeePageProps {
  showQrCode?: boolean
  partnerData?: string
}

export const AboutMeePage: React.FC<AboutMeePageProps> = ({ partnerData, showQrCode = false }) => {

  const partnerDataUnparsed: RequestData | undefined = useMemo(() => {
    if (typeof partnerData === 'undefined') return undefined;
    try {
      return decodeJwt(partnerData) as RequestData;
    } catch {
      return undefined;
    }
  }, [partnerData]);

  const getData = async () => {
    const nonce = partnerDataUnparsed?.nonce;
    if (nonce) {
      try {
        const data = await PollApi.poll(nonce);
        console.log(data);
        const url = partnerDataUnparsed.client_id;
        console.log(partnerDataUnparsed);
        if (url) {
          const redirectUrl = new URL(url);
          redirectUrl.searchParams.set('mee_auth_token', data);
          console.log(redirectUrl);
          window.location.href = redirectUrl.href;
        }
      } catch {
        // eslint-disable-next-line no-console
        console.log('error');
      }
    }
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnerDataUnparsed]);

  return (
    <MaxW>
      <div className="min-h-screen">
        <Header />
        <div className="w-full pt-38 px-4 flex flex-col justify-start items-center ">
          {showQrCode ? (
            <div className="w-full mb-38 flex flex-col justify-start items-center gap-8">
              <p className="max-w-86 pt-2 text-sm text-center pb-7 text-[#5A5A5A]">
                Please scan the QR code on your mobile phone or just click the button to download
                the Mee Identity Agent app
              </p>
              <QRCodeSVG  className="w-1/2 h-full" value={window.location.href.replace('consent', 'cdconsent')} />
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
            className="mt-8"
          >
            <img alt="App Store" src={appStoreImg} />
          </button>
        </div>
      </div>
    </MaxW>
  );
};
