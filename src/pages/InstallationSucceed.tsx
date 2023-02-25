/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { Fallback } from 'src/components/Fallback';
import { MaxW } from 'src/components/MaxW';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { PartnerItem } from 'src/model/partnerItem';
import { useNavigate, useParams } from 'react-router-dom';
import { Environment, getEnvironment } from 'src/helpers/getEnvironment';
import { PARTNER_DATA } from './DownloadPage';
import MeeLogo from '../assets/mee_logo.svg';
import LockImage from '../assets/lock.svg';
import illustrationEmpty from '../assets/meeIllustrationEmpty.svg';
import informationIcon from '../assets/informationIcon.svg';
import MeeCertifiedIcon from '../assets/meeCertifiedMark.svg';
import MeeCompatibleIcon from '../assets/meeCompatibleMark.svg';
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

const ContextExists: React.FC<ContextExistsProps> = ({ partnerData }) => {
  const partnerDataUnparsed: PartnerItem = useMemo(() => {
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

      <h1 className="pb-10 text-2xl font-bold">
        Congratulations! You’ve successfully installed Mee!
      </h1>
      <p className="text-lg font-medium">Click Next to connect to </p>
      <p className="text-3xl text-alt-color-8 font-bold">{partnerDataUnparsed.partnerName}</p>
      <div className="flex flex-row gap-3 pb-10">
        <img alt="lock" src={LockImage} className="w-4" />
        <p className="text-3xl font-bold">{partnerDataUnparsed.partnerDisplayedUrl}</p>
      </div>

      <button
        type="button"
        className="py-2 px-4 bg-primary text-sm font-bold text-white"
        onClick={() => {
          window.location.href = `https://auth.mee.foundation/#/consent/${partnerData}`;
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
    partnerName: 'Mee Foundation',
    partnerUrl: 'https://mee.foundation',
    partnerDisplayedUrl: 'mee.foundation',
    partnerImageUrl: 'https://mee.foundation/assets/mee_fav_icon.23140c64.svg',
    isCertified: true,
  },

];

interface PartnerListItemProps {
  partner: PartnerItem;
}

const PartnerListItem: React.FC<PartnerListItemProps> = ({ partner }) => {
  const navigate = useNavigate();
  return (
    <div
      className="py-3 border-t border-alt-color-6"
      tabIndex={-1}
      role="link"
      onClick={() => {
        navigate(partner.partnerUrl);
      }}
      onKeyPress={(e) => {
        if (e.key === 'enter') {
          navigate(partner.partnerUrl);
        }
      }}
    >
      <div className="flex flex-row gap-2">
        <img className="w-12 h-12 rounded-full" src={partner.partnerImageUrl} alt={partner.partnerName} />
        <div className="flex flex-col text-alt-color-8">
          <div className="flex flex-row gap-1">
            <p className="text-base">{partner.partnerName}</p>
            <img
              className="w-5"
              src={partner.isCertified
                ? MeeCertifiedIcon
                : MeeCompatibleIcon}
              alt={partner.isCertified
                ? 'Mee certified'
                : 'Mee compatible'}
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
    <div className="">
      <Header />
      <div className="max-w-256 mx-auto">
        <div className="min-h-screen">
          <div className="sub-header bg-primary flex flex-col items-center">
            <img src={illustrationEmpty} alt="mee-illustration" className="w-full" />
            <div className="my-3 w-full px-5 text-center">
              <h1 className="text-secondary text-2xl font-bold">Onwards and upwards!</h1>
              <p className="text-primary-content text-sm pt-2">
                You and I are at the beginning of our journey. I look forward to taking more steps together.
              </p>
            </div>
          </div>
          <div className="text-alt-color-8 px-4">
            <div className="pt-4 pb-2 flex flex-row justify-between">
              <h2 className="text-primary text-xl font-medium">Certified Apps</h2>
              <button
                type="button"
                onClick={() => {
                  window.open('/#/mee-certified', '_blank');
                }}
              >
                <img src={informationIcon} alt="mee-information" className="" />
              </button>
            </div>
            {
          partnerList.filter((partner) => partner.isCertified).map((partner) => (
            <PartnerListItem partner={partner} />
          ))

        }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </MaxW>
);

export const InstallationSucceed: React.FC = () => {
  const [partnerData, setPartnerData] = useState<string | undefined | null>(undefined);
  const params = useParams<{ partnerData: string }>();
  const environment = getEnvironment();
  useEffect(() => {
    if (environment === Environment.prodApp || environment === Environment.devApp) {
      const isDevEnv = environment === Environment.devApp;
      try {
        const localStoragePartnerData = localStorage.getItem(PARTNER_DATA);
        localStorage.removeItem(PARTNER_DATA);
        if (localStoragePartnerData !== null) {
          window.location.href = `https://${isDevEnv ? 'www-dev.' : ''}mee.foundation/#/installed/${localStoragePartnerData}`;
        } else {
          window.location.href = `https://${isDevEnv ? 'www-dev.' : ''}.mee.foundation/#/installed`;
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
      {typeof partnerData !== 'undefined'
        ? partnerData !== null
          ? <ContextExists partnerData={partnerData} /> : <ContextDoesNotExist />
        : <Fallback />}
    </div>
  );
};
