import { MaxW } from 'src/components/MaxW';
import MeeCertifiedMarkIcon from '../assets/meeCertifiedMark.svg';

export const PrivacyPolicyPage: React.FC = () => (
  <MaxW>
    <div className="max-w-256 mx-auto pt-5 text-base md:pt-48 pb-48 px-5 md:px-0 text-[#111827]">
      <div className="flex flex-col md:flex-row items-center justify-center pb-11 gap-5">
        <img className="h-20" alt="mee certified mark" src={MeeCertifiedMarkIcon} />
        <h1 className="text-center text-5xl font-bold">Privacy Policy</h1>
      </div>

      <p className="pb-5 text-sm">
        Last updated November 09, 2022
      </p>
      <p className="pb-5">
        The privacy notice for Mee Project Inc (“we”, ”us”, or “our”) website
        (http://meeproject.org) describes how and why we collect, store, use,
        and/or share (“process”) your information when you visit our website
        at http://meeproject.org
      </p>
      <p className="pb-5">
        <p className="">In short:</p>
        {' '}
        http://meeproject.org doesn’t collect, store, or use any of your personal data.
      </p>
      <p className="pb-5">
        Questions or concerns? Reading this privacy notice will help you understand your
        privacy rights and choices. If you do not agree with our policies and practices,
        please do not use our Services. If you still have any questions or concerns, please
        contact us at contact@meeproject.org.
      </p>
      <h2 className="pb-10">
        KEY POINTS
      </h2>
      {[{
        title: 'What personal information do we process?',
        text: 'We do not process any of your personal information. We don’t collect any of your personal information via the website http://meeproject.org',
      },
      {
        title: 'Do we process any sensitive personal information?',
        text: 'NO. We do not process any sensitive personal information.',
      },
      {
        title: ' Do we receive any information from third parties?',
        text: 'NO. We don’t receive any information from third parties.',
      },
      {
        title: 'How do we process your information?',
        text: 'We do not process any of your personal information.',
      },
      {
        title: 'In what situations and with which parties do we share personal information?',
        text: 'We never share personal information with any other parties.',
      },
      {
        title: 'When and with whom do we share your personal information?',
        text: 'We do not share any of your personal information.',
      },
      {
        title: 'How long do we keep your information?',
        text: 'We do not keep any of your personal information.',
      },
      {
        title: 'Controls for do-not-track features?',
        text: "We do not use cookies and trackers on our website. The website http://meeproject.org does not have any interactive elements and doesn't require any sort of login or account information from the users.",
      },
      ].map((item) => (
        <div className="pb-5">
          <h3 className="pb-5">
            {item.title}
          </h3>
          <p className="pb-5">{item.text}</p>
        </div>
      ))}

      <h3 className="pb-5">
        Do we make updates to this notice?
      </h3>
      <p className="pb-5">
        <p className="">In short:</p>
        {' '}
        Yes, we will update this notice as necessary to stay compliant with relevant laws.
      </p>
      <p className="pb-5">
        We may update this privacy notice from time to time. The updated
        version will be indicated by an updated “Revised” date of the updated version will be
        effective as soon as it is accessible. We encourage you to review this privacy notice
        frequently to be informed of how we are protecting your information.
      </p>
      <h3 className="pb-5">
        How can you contact us about this notice?
      </h3>
      <p className="pb-5 ">
        If you have questions or comments about this notice, you may email us at contact@meeproject.org or by post to:
      </p>
      <div className="">
        <p>Mee Project Inc</p>
        <p>25 Craftsland Road</p>
        <p>Chestnut Hill, MA 02467</p>
        <p>United States</p>
      </div>

    </div>
  </MaxW>
);
