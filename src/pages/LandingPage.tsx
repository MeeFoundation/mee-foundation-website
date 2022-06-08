import React from 'react';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import illustration from '../assets/mee_illustration_1.jpg';
import ownership from '../assets/ownership.svg';
import privacy from '../assets/privacy.svg';
import power from '../assets/power.svg';

export const LandingPage: React.FC = () => (
  <div className="max-w-256 mx-auto">
    <Header />
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
          by giant corporations that monetize it for their advantage, not ours.
        </p>
        <p className="text-secondary">Good for them. Bad for us.</p>
      </div>
    </div>
    <div className="content max-w-full flex flex-col items-center">
      <div className="my-9 md:my-10 sm:px-28 md:px-60 px-4 w-full text-center">
        <p className="text-primary">
          <i>Mee</i>
          {' '}
          is a software and legal framework to support
          human-centered apps that improve the quality of online life
          by giving people more control over their personal data.
        </p>
      </div>
      <div className="w-full flex flex-row flex-wrap">
        <div className="bg-alt-color-1 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
          <span className="text-secondary-content">
            <b>More Ownership.</b>
            <br />
            Data rights are human rights.
          </span>
          <div className="w-10 h-10 p-2 my-auto rounded-full bg-white">
            <img src={ownership} alt="ownership" className="ml-0.5" />
          </div>
        </div>
        <div className="bg-alt-color-2 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
          <span className="text-primary-content">
            <b>More privacy.</b>
            <br />
            Control what others know about you.
          </span>
          <div className="w-10 h-10 p-2 my-auto rounded-full bg-white">
            <img src={privacy} alt="privacy" className="" />
          </div>
        </div>
        <div className="bg-alt-color-3 h-34 md:h-42 min-w-[225px] ssm:min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4 pr-6">
          <span className="text-secondary-content">
            <b>More power.</b>
            <br />
            The future is Mee-compatible
            apps.
          </span>
          <div className="w-10 h-10 p-2 my-auto rounded-full bg-white">
            <img src={power} alt="power" className="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-primary text-xl md:text-2xl text-center mt-8 mb-3 mx-2"><b>Good for everyone.</b></h2>
        <p className="text-primary text-center text-base md:text-xl">
          We’re not-for-profit and open-source. Curious?
          <br />
          Email us at
          {' '}
          <b>hello@mee.foundation</b>
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
