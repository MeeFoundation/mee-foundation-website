/* eslint-disable no-console */
import React, {useEffect, useMemo} from 'react';
import {QRCodeSVG} from 'qrcode.react';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';
import type {RequestData} from '../model/partnerItem';
import {decodeJwt} from 'jose';
import {PollApi} from '../api/common';
import appStoreImg from '../assets/appStore.svg';
import {APP_STORE_LINK, PARTNER_DATA} from '../../constants';

interface AboutMeePageProps {
  showQrCode?: boolean;
  partnerData: string | null;
}

export const AboutMeePage: React.FC<AboutMeePageProps> = ({
  partnerData,
  showQrCode = false,
}) => {
  const url = new URL(window.location.href);
  const hashPrepared = url.hash !== '' ? url.hash.slice(1) : undefined;

  const partnerDataUnparsed: RequestData | undefined = useMemo(() => {
    if (hashPrepared === null || typeof hashPrepared === 'undefined')
      return undefined;
    try {
      return decodeJwt(hashPrepared) as RequestData;
    } catch {
      return undefined;
    }
  }, [hashPrepared]);

  console.log(hashPrepared, partnerDataUnparsed);

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
                value={`https://auth.mee.foundation/authorize?scope=openid&request=${hashPrepared}&respondTo=proxy`}
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
                if (hashPrepared)
                  localStorage.setItem(PARTNER_DATA, hashPrepared);
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
