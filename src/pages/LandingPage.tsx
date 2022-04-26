import React from 'react';
import illustration from '../assets/mee_illustration_1.jpg';
import ownership from '../assets/ownership.svg';
import privacy from '../assets/privacy.svg';
import power from '../assets/power.svg';
import logo from '../assets/mee_logo.svg';
import head from '../assets/head.svg';

export const LandingPage: React.FC = () => (
  <div className="flex flex-col items-shrink">
    <div className="header flex flex-row justify-between">
      <img src={logo} alt="mee-logo" className="h-5.5 m-3.5" />
      <div className="hidden header-links flex flex-row items-center m-3.5 text-primary text-2xs">
        <span>Individuals</span>
        <span className="mx-2">|</span>
        <span>Developers</span>
        <span className="mx-2">|</span>
        <span>Blog</span>
        <span className="mx-2">|</span>
        <span>Contact</span>
      </div>
    </div>
    <div className="sub-header bg-primary flex flex-col items-center">
      <div className="flex mt-4 mb-2 whitespace-pre-wrap text-2xl font-normal">
        <h1 className="text-secondary"><b>Hello.</b></h1>
        <h1>{' '}</h1>
        <h1 className="text-primary-content">
          It&apos;s
          {' '}
          <i>Mee</i>
        </h1>
      </div>
      <img src={illustration} alt="mee-illustration" className="w-150 max-w-full" />
      <div className="my-7 max-w-xl px-5 text-center text-sm leading-4">
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
          <i>Mee</i>
          {' '}
          is a software and legal framework to support
          human-centered apps that improve the quality of online life
          by giving people more control over their personal data.
        </p>
      </div>
      <div className="w-150 max-w-full flex flex-row flex-wrap text-sm leading-4">
        <div className="bg-alt-color-1 h-32 min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary">
            <b>More ownership.</b>
            <br />
            Own your personal data.
          </span>
          <div className="w-8 h-8 p-1.5 mb-5 rounded-full bg-white">
            <img src={ownership} alt="ownership" className="ml-0.5" />
          </div>
        </div>
        <div className="bg-alt-color-2 h-32 min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary-content">
            <b>More privacy.</b>
            <br />
            Control what others know
            about you.
          </span>
          <div className="w-8 h-8 p-1 mb-5 rounded-full bg-white">
            <img src={privacy} alt="privacy" className="" />
          </div>
        </div>
        <div className="bg-alt-color-3 h-32 min-w-[200px] flex-1 flex flex-col justify-between pt-4 pl-4">
          <span className="text-primary">
            <b>More power.</b>
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
        <h2 className="text-primary text-lg text-center mt-8 mb-3 mx-2"><b>Good for everyone.</b></h2>
        <p className="text-primary max-w-sm text-center text-sm leading-4">
          We’re not-for-profit and open-source. Curious?
          <br />
          Email us at
          {' '}
          <b>hello@mee.foundation</b>
        </p>
      </div>
    </div>
    <div className="footer mt-16 w-full flex flex-col items-shrink relative">
      <div className="w-full bg-primary flex flex-col items-center z-10">
        <div className="hidden w-150 max-w-full flex flex-row py-7 px-4 text-primary-content text-3xs leading-tight">
          <div className="flex-1">
            <div>
              <p>For Individuals</p>
              <p>What is Mee?</p>
              <p>What does the Mee app do?</p>
              <p>What does the Mee Framework do?</p>
              <p>What is the Mee Data Sharing Agreement (DSA)?</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="px-5">
              <p>For Developers</p>
              <p>Architecture</p>
              <p>Initial Functionality</p>
              <p>Roadmap</p>
              <p>Ecosystem Overview</p>
              <p>Community</p>
              <p>Specifications</p>
              <p>Reference Implementation</p>

            </div>
          </div>
          <div className="flex-1">
            <div className="px-5">
              <p>Mee Blog</p>
              <p className="mt-3.5">Contact</p>
              <p className="mt-3.5">Donate</p>
            </div>
          </div>
        </div>
        <div className="w-150 max-w-full px-4 pt-20">
          <div className="flex basis-2/3 flex-col justify-start text-3xs leading-tight text-primary-content">
            <p>
              The Mee project is sponsored by the
              <br />
              Mee Foundation, a 501(c)(4) non-profit corporation
            </p>
            <p className="my-5">
              © 2022 Mee Foundation, Inc.
            </p>
          </div>
        </div>
      </div>
      <img src={head} alt="mee-illustration-2" className="w-24 absolute -top-5 right-0 left-0 m-auto" />
    </div>
  </div>
);
