import React, { useEffect, useState } from 'react';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { MaxW } from 'src/components/MaxW';
import clsx from 'clsx';
import illustration from '../assets/mee_illustration_1.jpg';
import ownership from '../assets/ownership.svg';
import privacy from '../assets/privacy.svg';
import power from '../assets/power.svg';

interface LandingProps {
  appButton?: React.FC;
}

export const Landing: React.FC<LandingProps> = ({ appButton: AppButton }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <MaxW>
      <>
        <Header />
        {AppButton && (
        <div className={clsx(
          'fixed flex flex-row justify-center transition-all duration-200 top-150 md:top-193',
          scrollPosition === 0 ? 'left-0 right-0' : '-left-50',
        )}
        >
          <AppButton />
        </div>
        )}
        <div className="max-w-256 mx-auto">
          <div className="sub-header bg-primary flex flex-col items-center">
            <div className="flex flex-wrap justify-center text-center font-ps my-4 whitespace-pre-wrap text-2xl lg:text-3xl leading-7">
              <h1 className="text-secondary"><b>Hello.</b></h1>
              <h1>{' '}</h1>
              <h1 className="text-primary-content">
                It&apos;s
                {' '}
                <i>Mee</i>
                .
              </h1>

            </div>
            <img src={illustration} alt="mee-illustration" className="" />
            <div className="my-7 w-full sm:px-10 md:px-15 px-4 text-center">
              <p className="text-primary-content ">
                Today, our online selves — our preferences, interests, affiliations, social networks,
                medical records, locations, and so on — are owned by others. Our data is harvested
                by corporations that monetize it for their advantage, not ours.
              </p>
              <p className="text-secondary">Good for them. Bad for us.</p>
            </div>
          </div>
          <div className="content max-w-full flex flex-col items-center">
            <div className="my-9 md:my-10 sm:px-28 md:px-60 px-4 w-full text-center">
              <p className="text-primary">
                Our mission is to enable human-centered, high-trust, private relationships
                between internet users and service providers (e.g., apps, websites, etc.).
                The Mee Foundation is developing the governance and decentralized, human-centered
                software technology necessary to support these relationships.
              </p>
            </div>
            <div className="w-full flex flex-row flex-wrap">
              <div className="bg-alt-color-1 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
                <span className="text-landing-secondary-text">
                  <b>More Ownership.</b>
                  <br />
                  Data rights are human rights.
                </span>
                <div className="w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white">
                  <img src={ownership} alt="ownership" className="ml-0.5" />
                </div>
              </div>
              <div className="bg-alt-color-2 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
                <span className="text-primary-content">
                  <b>More privacy.</b>
                  <br />
                  Control what others know about you.
                </span>
                <div className="w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white">
                  <img src={privacy} alt="privacy" className="" />
                </div>
              </div>
              <div className="bg-alt-color-3 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
                <span className="text-landing-secondary-text">
                  <b>More power.</b>
                  <br />
                  The future is Mee-compatible
                  apps.
                </span>
                <div className="w-10 h-10 p-2 mt-auto mb-6 sm:mb-5 rounded-full bg-white">
                  <img src={power} alt="power" className="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-primary text-xl md:text-2xl text-center mt-8 mb-3 mx-2"><b>Good for everyone.</b></h2>
              <p className="text-primary text-center text-base md:text-xl">
                We’re not-for-profit and open-source.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </>
    </MaxW>
  );
};

export const LandingPage: React.FC = () => (
  <Landing />
);
