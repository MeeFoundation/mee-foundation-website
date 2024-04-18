/* eslint-disable no-nested-ternary */
import React, {useEffect, useMemo, useState} from 'react';
import {Fallback} from '../components/Fallback';
import {MaxW} from '../components/MaxW';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import type {PartnerItem} from '../model/partnerItem';
import {Environment, getEnvironment} from '../helpers/getEnvironment';
import {decodeJwt} from 'jose';
import MeeLogo from '../assets/mee_logo.svg';
import LockImage from '../assets/lock.svg';
import cloud from '../assets/cloud.svg';
import guy from '../assets/guy.svg';
import MeeCertifiedIcon from '../assets/meeCertifiedMark.svg';
import MeeCompatibleIcon from '../assets/meeCompatibleMark.svg';
import {PARTNER_DATA} from '../../constants';
// import MeeButtonIcon from '../assets/meeButtonActive.svg';

// const OpenAppButton: React.FC = () => (
//   <div />
//   // <button type="button" className="shadow-lg flex flex-row gap-3 justify-center items-center border-3 border-primary pr-4 pl-2 py-2 bg-white">
//   //   <img alt="Mee" src={MeeButtonIcon} className="h-8" />
//   //   <p className="text-primary text-sm font-bold">Open Mee</p>
//   // </button>
// );

interface ContextExistsProps {
  partnerData: string;
}

const ContextExists: React.FC<ContextExistsProps> = ({partnerData}) => {
  const partnerDataUnparsed: PartnerItem = useMemo(() => {
    try {
      return decodeJwt(partnerData);
    } catch {
      try {
        return JSON.parse(window.atob(partnerData));
      } catch {
        window.location.href = '/';
        return {partnerName: '', partnerUrl: '', partnerDisplayedUrl: ''};
      }
    }
  }, [partnerData]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start bg-white px-5 pt-32 text-center">
      <img className="mb-20 h-12" alt="mee" src={MeeLogo.src} />

      <h1 className="pb-8 text-2xl font-bold text-primary">
        Let’s set up your first connection!
      </h1>

      <p className="pb-8 text-lg font-medium text-black">
        Allow Mee to establish a way to talk to the site you’ve just chosen to
        interact with.
      </p>
      <p className="text-lg font-medium text-black">Connect to </p>
      <p className="text-alt-color-8 text-3xl font-bold text-black">
        {partnerDataUnparsed.partnerName ||
          partnerDataUnparsed.client_metadata?.client_name}
      </p>
      <div className="flex flex-row gap-3 pb-10">
        <img alt="lock" src={LockImage.src} className="w-4" />
        <p className="text-xl font-bold text-primary">
          {partnerDataUnparsed.partnerDisplayedUrl ||
            partnerDataUnparsed.client_metadata?.display_url}
        </p>
      </div>

      <button
        type="button"
        className="bg-primary px-4 py-2 text-sm font-bold text-white"
        onClick={() => {
          window.location.href = `https://auth.mee.foundation/authorize?scope=openid&request=${partnerData}`;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          // (window as any).MeeWebSDK.buttonAction(partnerId);
        }}
      >
        Next
      </button>
    </div>
  );
};

const partnerList: PartnerItem[] = [
  {
    partnerName: 'The Olde York Times',
    partnerUrl: 'https://oldeyorktimes.com',
    partnerDisplayedUrl: 'oldeyorktimes.com',
    partnerImageUrl: 'https://oldeyorktimes.com/favicon.png',
    isCertified: true,
  },
];

interface PartnerListItemProps {
  partner: PartnerItem;
}

const PartnerListItem: React.FC<PartnerListItemProps> = ({partner}) => {
  return (
    <div
      className="border-alt-color-6 cursor-pointer border-t py-3"
      tabIndex={-1}
      role="link"
      onClick={() => {
        window.location.href = partner.partnerUrl;
      }}
      onKeyPress={(e) => {
        if (e.key === 'enter') {
          window.location.href = partner.partnerUrl;
        }
      }}
    >
      <div className="flex flex-row gap-2">
        <img
          className="h-12 w-12 rounded-full"
          src={partner.partnerImageUrl}
          alt={partner.partnerName}
        />
        <div className="text-alt-color-8 flex flex-col">
          <div className="flex flex-row gap-1">
            <p className="text-base">{partner.partnerName}</p>
            <img
              className="w-5"
              src={
                partner.isCertified
                  ? MeeCertifiedIcon.src
                  : MeeCompatibleIcon.src
              }
              alt={partner.isCertified ? 'Mee certified' : 'Mee compatible'}
            />
          </div>

          <p className="text-xs">{partner.partnerDisplayedUrl}</p>
        </div>
      </div>
    </div>
  );
};

const ContextDoesNotExist: React.FC = () => (
  <MaxW>
    <div data-theme="meeTheme" className="">
      <Header />
      <div className="max-w-256 mx-auto">
        <div className="min-h-screen">
          <div className="sub-header flex flex-col items-center bg-secondary pt-5">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="relative">
                <img className="" src={cloud.src} alt="cloud" />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center px-8 pt-2">
                  <h1 className="xs:text-3xl px-2 text-center text-xl font-normal text-primary">
                    Let’s set up your first connection
                  </h1>
                  <p className="pt-2 text-center text-sm text-primary">
                    It is your first time setting up Mee! By creating a
                    connection I mean establishing a way for Mee to talk to
                    apps/sites you would like to sign in/up. Choose who you want
                    me to start talking with.
                  </p>
                </div>
              </div>
              <img className="z-10 pt-2" src={guy.src} alt="person" />
              <div
                className="h-19 relative -mt-2
               flex w-full flex-col items-center justify-center overflow-hidden"
              >
                <div className="absolute bottom-0 top-0 h-[200vh] w-[200vh] rounded-t-[50%] border-t bg-white">
                  <h2 className="pt-11 text-center text-xl font-medium text-primary">
                    Sites to connect to
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="text-alt-color-8 px-4 pt-8">
            {partnerList
              .filter((partner) => partner.isCertified)
              .map((partner) => (
                <PartnerListItem key={partner.partnerUrl} partner={partner} />
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </MaxW>
);

interface InstallationSucceedProps {
  partner?: string;
}

export const InstallationSucceed: React.FC<InstallationSucceedProps> = ({
  partner,
}) => {
  const [partnerData, setPartnerData] = useState<string | undefined | null>(
    undefined,
  );
  const environment = getEnvironment();

  const url = new URL(window.location.href);
  const hashPrepared = url.searchParams.get('request') || undefined;

  const params = {partnerData: hashPrepared};

  useEffect(() => {
    if (
      environment === Environment.prodApp ||
      environment === Environment.devApp
    ) {
      const isDevEnv = environment === Environment.devApp;
      try {
        const localStoragePartnerData = localStorage.getItem(PARTNER_DATA);
        localStorage.removeItem(PARTNER_DATA);
        if (localStoragePartnerData !== null) {
          window.location.href = `https://${
            isDevEnv ? 'www-dev.' : ''
          }mee.foundation/installed?request=${localStoragePartnerData}`;
        } else {
          window.location.href = `https://${
            isDevEnv ? 'www-dev.' : ''
          }mee.foundation/installed`;
        }
      } catch {
        //
      }
    } else if (typeof params.partnerData !== 'undefined') {
      setPartnerData(params.partnerData);
    } else {
      setPartnerData(null);
    }
  }, [environment, params]);

  return (
    <div>
      {typeof partnerData !== 'undefined' ? (
        partnerData !== null ? (
          <ContextExists partnerData={partnerData} />
        ) : (
          <ContextDoesNotExist />
        )
      ) : (
        <Fallback />
      )}
    </div>
  );
};
