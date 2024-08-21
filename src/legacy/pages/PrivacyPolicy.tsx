/* eslint-disable react/jsx-closing-tag-location */
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';

interface MeeUrlProps {
  text: string;
  url?: string;
}

const MeeUrl: React.FC<MeeUrlProps> = ({url, text}) => (
  <a
    className="text-base font-medium text-primary underline"
    href={typeof url === 'undefined' ? text : url}
  >
    {text}
  </a>
);

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({text}) => (
  <p className="font-bold text-primary">{text}</p>
);

interface SectionProps {
  title: string;
  answer: JSX.Element | string;
}

const Section: React.FC<SectionProps> = ({title, answer}) => (
  <div className="pt-10">
    <Subtitle text={title} />
    <p className="pt-2">{answer}</p>
  </div>
);

export const PrivacyPolicyPage: React.FC = () => (
  <MaxW>
    <div className="text-alt-color-8" data-theme="meeTheme">
      <Header />

      <div className="max-w-256 mx-auto px-5 pb-20 pt-10 text-base text-[#111827]">
        <h1 className="text-4xl font-medium text-primary">Privacy Policy</h1>
        <p className="pt-10">
          We (The Mee Foundation, Inc., a nonprofit registered in Massachusetts,
          USA) are dedicated to the creation of a human-centered user experience
          for the internet that gives you control over your personal information
          and respects your right to privacy. This privacy policy will help you
          understand what happens to your data when you visit our website{' '}
          <MeeUrl text="https://mee.foundation" />.
        </p>
        {[
          {
            title: 'Questions or concerns?',
            answer: (
              <span>
                Reading this privacy notice will help you understand your
                privacy rights and choices. If you do not agree with our
                policies and practices, please do not use our services. If you
                still have any questions or concerns, please contact us at{' '}
                <MeeUrl
                  text="contact@mee.foundation"
                  url="mailto:contact@mee.foundation"
                />
                .
              </span>
            ),
          },
        ].map((item) => (
          <Section key={item.title} title={item.title} answer={item.answer} />
        ))}
        <h2 className="pt-10 font-bold text-primary">KEY POINTS</h2>
        {[
          {
            title: 'What personal information do we process?',
            answer: (
              <span>
                With your consent, if you visit our website and subscribe to our
                newsletter, we collect and use your contact details (your first
                name and your email address) for the purpose of sending you our
                newsletter and other updates related to Foundation activities.
                We do not share or sell this information with third parties.
              </span>
            ),
          },
          {
            title: 'Do we process any sensitive personal information?',
            answer: 'NO. We do not process any sensitive personal information.',
          },
          {
            title: 'Do we receive any information from third parties?',
            answer: 'NO. We don’t receive any information from third parties.',
          },
          {
            title: 'How do we process your information?',
            answer: 'We send our newsletter to your email address',
          },
          {
            title:
              'In what situations and with which parties do we share personal information?',
            answer:
              'We never share personal information with any other parties.',
          },
          {
            title: 'When and with whom do we share your personal information?',
            answer: 'We do not share any of your personal information.',
          },
          {
            title: 'How long do we keep your information?',
            answer: (
              <span>
                We keep your contact details (your first name and your email
                address) until the moment you unsubscribe from our newsletter.
                After that, we will delete all of your personal information.
              </span>
            ),
          },
          {
            title: 'Controls for do-not-track features?',
            answer: (
              <span>
                We do not use cookies or trackers on our website. Your visit to
                our website or use of our app does not generate logs of any
                personally identifiable information.
              </span>
            ),
          },
          {
            title: 'Do we make updates to this notice?',
            answer: (
              <span>
                Yes, we will update this notice as necessary to stay compliant
                with the relevant laws. We may update this privacy notice from
                time to time. The updated version will be indicated by an
                updated “Revised” date and will be effective as soon as it is
                accessible. We encourage you to review this privacy notice
                frequently to be informed of how we are protecting your
                information.
              </span>
            ),
          },
          {
            title: 'How can you contact us about this notice?',
            answer: (
              <span>
                If you have questions or comments about this notice, you may
                email us at{' '}
                <MeeUrl
                  text="contact@mee.foundation"
                  url="mailto:contact@mee.foundation"
                />{' '}
                or by mail to:{' '}
                <span className="font-medium">
                  Mee Foundation Inc, 25 Craftsland Road, Chestnut Hill, MA
                  02467, United States
                </span>
              </span>
            ),
          },
        ].map((item) => (
          <Section key={item.title} title={item.title} answer={item.answer} />
        ))}
        <p className="pt-10">Last updated August 18, 2024</p>
      </div>
      <Footer />
    </div>
  </MaxW>
);
