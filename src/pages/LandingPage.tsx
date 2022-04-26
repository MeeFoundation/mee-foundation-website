import React from 'react';
import illustration from '../assets/mee_illustration_1.jpg';
import ownership from '../assets/ownership.svg';
import privacy from '../assets/privacy.svg';
import power from '../assets/power.svg';

export const LandingPage: React.FC = () => (
  <div className="flex flex-col items-shrink">
    <div className="sub-header bg-primary flex flex-col items-center">
      <div className="flex mt-4 mb-2 whitespace-pre-wrap text-2xl font-normal">
        <h1 className="text-secondary">Hello.</h1>
        <h1>{' '}</h1>
        <h1 className="text-primary-content">It&apos;s Mee</h1>
      </div>
      <img src={illustration} alt="mee-illustration" className="w-150 max-w-full" />
      <div className="my-7 mx-4 max-w-xl px-5 text-center text-sm leading-4">
        <p className="text-primary-content">
          Today, our online selves-our preferences, interests, affiliations, social networks,
          medical records, locations, and so on-are owned by others. Our data is harvested
          by giant corporations that monetize it for their advantage, not ours.
        </p>
        <p className="text-secondary">Good for them. Bad for us.</p>
      </div>
    </div>
    <div className="content flex flex-col items-center">
      <div className="my-11 mx-4 max-w-md text-center text-sm leading-4">
        <p className="text-primary">
          Mee is a software and legal framework to support
          human-centered apps that improve the quality of online life
          by giving people more control over their personal data.
        </p>
      </div>
      <div className="w-150 max-w-full flex flex-row text-sm leading-4">
        <div className="bg-alt-color-1 h-32 flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary">
            More ownership.
            <br />
            Own your personal data.
          </span>
          <div className="w-8 h-8 p-1.5 mb-5 rounded-full bg-white">
            <img src={ownership} alt="ownership" className="ml-0.5" />
          </div>
        </div>
        <div className="bg-alt-color-2 h-32 flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary-content">
            More privacy.
            <br />
            Control what others know
            about you.
          </span>
          <div className="w-8 h-8 p-1 mb-5 rounded-full bg-white">
            <img src={privacy} alt="privacy" className="" />
          </div>
        </div>
        <div className="bg-alt-color-3 h-32 flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary">
            More power.
            <br />
            The future is Mee-compatible
            apps.
          </span>
          <div className="w-8 h-8 p-1 mb-5 rounded-full bg-white">
            <img src={power} alt="power" className="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-primary text-lg text-center mt-8 mb-3 mx-2">Good for everyone.</h2>
        <p className="text-primary max-w-sm text-center text-sm leading-4">
          We’re not-for-profit and open-source. Curious?
          <br />
          Email us at hello@mee.foundation
        </p>
      </div>
    </div>
    <div className="footer mt-16 w-full flex flex-col items-shrink">
      <div className="w-full bg-primary flex flex-col items-center">
        <div className="w-150 max-w-full flex flex-row py-7 px-4 text-3xs leading-tight">
          <div className="flex-1 text-primary-content">
            <p>For Individuals</p>
            <p>What is Mee?</p>
            <p>What does the Mee app do?</p>
            <p>What does the Mee Framework do?</p>
            <p>What is the Mee Data Sharing Agreement (DSA)?</p>
          </div>
          <div className="flex-1 px-5 text-primary-content">
            <p>For Developers</p>
            <p>Architecture</p>
            <p>Initial Functionality</p>
            <p>Roadmap</p>
            <p>Ecosystem Overview</p>
            <p>Community</p>
            <p>Specifications</p>
            <p>Reference Implementation</p>
          </div>
          <div className="flex-1 px-5 text-primary-content">
            <p>Mee Blog</p>
            <p>Contact</p>
            <p>Donate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
