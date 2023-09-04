/* eslint-disable no-console */
import React, {useEffect, useMemo, useRef} from 'react';
import {QRCodeSVG} from 'qrcode.react';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';
import type {RequestData} from '../model/partnerItem';
import {decodeJwt} from 'jose';
import {PollApi} from '../api/common';
import appStoreImg from '../assets/appStore.svg';
import googlePlayImg from '../assets/googlePlay.png';
import {APP_STORE_LINK, GOOGLE_PLAY_LINK, PARTNER_DATA} from '../../constants';
import exchangeArrowIcon from '../../assets/exchange-arrow.svg';
import advantageMarkIcon from '../../assets/advantage-mark.svg';
import qrCodeIcon from '../../assets/qrcode-logo.svg';
import meeLogo from '../../assets/mee-logo-square.svg';

interface AdvantageItemProps {
  text: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({text}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <img className="h-4 w-4" src={advantageMarkIcon.src} alt="advantage" />
      <p className="text-base">{text}</p>
    </div>
  );
};

export const AboutMeePage: React.FC = () => {
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

  const isMee = partnerDataUnparsed?.redirect_uri.startsWith(
    'https://mee.foundation',
  );

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

  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnerDataUnparsed]);

  return (
    <MaxW>
      <div
        className="min-h-screen font-imperial text-black"
        data-theme="meeTheme"
      >
        <Header />
        <div className="flex w-full flex-col items-center justify-between pt-8 md:flex-row md:items-start md:gap-23 md:pt-25">
          <div className="flex w-full flex-col items-center justify-start px-4">
            <h1 className="text-center text-3.5xl font-semibold text-black">
              Log in with Smartwallet
            </h1>
            <div className="flex flex-row items-center justify-center gap-4 pt-6">
              {isMee || (
                <>
                  <img
                    alt="Partner Logo"
                    className="w-12"
                    src={partnerDataUnparsed?.client_metadata.logo_uri}
                  />
                  <img alt="Exchange" src={exchangeArrowIcon.src} />
                </>
              )}
              <img
                className="rounded-full4 w-12"
                alt="Mee Logo"
                src={meeLogo.src}
              />
            </div>

            <h2 className="w-58 pt-6 text-center text-base font-semibold">
              {`${partnerDataUnparsed?.client_metadata.client_name} and Mee are committed to`}
            </h2>
            <div className="pt-1.5">
              <AdvantageItem text="surveillance-free interactions" />
              <AdvantageItem text="respect your privacy " />
              <AdvantageItem text="one-tap account creation " />
              <AdvantageItem text="password-less login" />
              <AdvantageItem text="less form filling" />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 pt-6">
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
            <button
              onClick={() => {
                qrCodeRef.current?.scrollIntoView();
              }}
              className="mt-2 flex flex-row items-center justify-between gap-2 rounded-md border border-gray-900 p-2 md:hidden"
              type="button"
            >
              <img className="h-6 w-6" alt="qr code" src={qrCodeIcon.src} />
              <p className="text-base font-semibold">Scan QR</p>
            </button>
            {isMee || (
              <a
                className="mt-6 underline"
                href={partnerDataUnparsed?.redirect_uri}
              >
                All login options
              </a>
            )}
          </div>
          <div
            ref={qrCodeRef}
            className="mx-14 mb-6 mt-6 flex w-full flex-col items-center justify-start gap-8 rounded-lg border-primary md:ml-0 md:mr-4 md:mt-0 md:border md:p-4"
          >
            <QRCodeSVG
              className="h-full w-73 md:w-full"
              value={`https://auth.mee.foundation/authorize?scope=${scope}&request=${partnerData}&respondTo=proxy`}
            />
            <p className="px-4">
              Not sure how to scan this QR code? Open the camera on your
              smartphone and hover it over the QR code to open or download the
              Mee Smartwallet app.
            </p>
          </div>
        </div>
      </div>
    </MaxW>
  );
};
