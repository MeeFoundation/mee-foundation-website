/* eslint-disable no-console */
import React, {useEffect, useMemo} from 'react';
import {QRCodeSVG} from 'qrcode.react';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';
import type {RequestData} from '../model/partnerItem';
import {decodeJwt} from 'jose';
import {PollApi} from '../api/common';
import appStoreImg from '../assets/appStore.svg';
import googlePlayImg from '../assets/googlePlay.png';
import {APP_STORE_LINK, GOOGLE_PLAY_LINK, PARTNER_DATA} from '../../constants';

interface AboutMeePageProps {
  showQrCode?: boolean;
}

export const AboutMeePage: React.FC<AboutMeePageProps> = ({
  showQrCode = false,
}) => {
  const url = new URL(window.location.href);
  const partnerData = url.searchParams.get('request') || undefined;
  const scope = url.searchParams.get('scope') || undefined;

  const partnerDataUnparsed: RequestData | undefined = useMemo(() => {
    if (partnerData === null || typeof partnerData === 'undefined')
      return undefined;
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
        const url = partnerDataUnparsed.client_id;
        if (url) {
          const redirectUrl = new URL(url);
          redirectUrl.searchParams.set('id_token', data);
          window.location.href = redirectUrl.href;
        }
      } catch {}
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnerDataUnparsed]);

  return (
    <MaxW>
      <div className="min-h-screen" data-theme="meeTheme">
        <Header />
        <div className="pt-38 flex w-full flex-col items-center justify-start px-4 ">
          {showQrCode ? (
            <div className="mb-38 flex w-full flex-col items-center justify-start gap-8">
              <p className="max-w-86 pb-7 pt-2 text-center text-sm text-[#5A5A5A]">
                Please scan the QR code on your mobile phone or just click the
                button to download the Mee Identity Agent app
              </p>
              <QRCodeSVG
                className="h-full w-1/2"
                value={`https://auth.mee.foundation/authorize?scope=${scope}&request=${partnerData}&respondTo=proxy`}
              />
            </div>
          ) : (
            <p className="max-w-86 pb-12 pt-2 text-center text-sm text-[#5A5A5A]">
              Click the button to download the Mee Identity Agent app
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              try {
                if (partnerData)
                  localStorage.setItem(PARTNER_DATA, partnerData);
              } finally {
                window.location.href = APP_STORE_LINK;
              }
            }}
            className="mt-8"
          >
            <img alt="App Store" src={appStoreImg.src} />
          </button>
          <button
            type="button"
            onClick={() => {
              try {
                if (partnerData)
                  localStorage.setItem(PARTNER_DATA, partnerData);
              } finally {
                const currentUrlEncoded = window.btoa(window.location.href);
                window.location.href = `${GOOGLE_PLAY_LINK}&referrer=authorize_mee%3D${currentUrlEncoded}`;
              }
            }}
            className="mt-8 flex w-30 justify-center"
          >
            <img alt="App Store" src={googlePlayImg.src} />
          </button>
        </div>
      </div>
    </MaxW>
  );
};
