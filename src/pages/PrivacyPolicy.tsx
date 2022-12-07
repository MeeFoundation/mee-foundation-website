/* eslint-disable react/jsx-closing-tag-location */
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { MaxW } from 'src/components/MaxW';

interface MeeUrlProps {
  text: string
  url?: string
}

const MeeUrl: React.FC<MeeUrlProps> = ({ url, text }) => (
  <a
    className="underline text-primary font-medium text-base"
    href={typeof url === 'undefined' ? text : url}
  >
    {text}
  </a>
);

interface SubtitleProps {
  text: string
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => (
  <p className="text-primary font-bold">{text}</p>
);

interface SectionProps {
  title: string
  answer: JSX.Element | string
}

const Section: React.FC<SectionProps> = ({ title, answer }) => (
  <div className="pt-10">
    <Subtitle text={title} />
    <p className="pt-2">{answer}</p>
  </div>

);

export const PrivacyPolicyPage: React.FC = () => (
  <MaxW>
    <div className="text-alt-color-8">
      <Header />

      <div className="max-w-256 mx-auto text-base pt-10 px-5 md:px-0 pb-20 text-[#111827]">
        <h1 className="text-4xl font-medium text-primary">Privacy Policy</h1>
        <p className="pt-10">
          The privacy notice for Mee Project Inc (“we”, ”us”, or “our”) website
          (
          <MeeUrl text="https://mee.foundation" />
          ) describes how and why we collect, store, use,
          and/or share (“process”) your information when you visit our website
          at
          {' '}
          <MeeUrl text="https://mee.foundation" />
          .
        </p>
        {[{
          title: 'In short:',
          answer: <span>
            <MeeUrl text="https://mee.foundation" />
            {' '}
            doesn’t collect, store, or use any of your personal data.
          </span>,
        },
        {
          title: 'Questions or concerns?',
          answer: <span>
            Reading this privacy notice will help you understand your
            privacy rights and choices. If you do not agree with our policies and practices,
            please do not use our Services. If you still have any questions or concerns, please
            contact us at
            {' '}
            <MeeUrl text="contact@mee.foundation" url="mailto:contact@mee.foundation" />
            .
          </span>,
        }].map((item) => <Section key={item.title} title={item.title} answer={item.answer} />)}
        <h2 className="font-bold text-primary pt-10">
          KEY POINTS
        </h2>
        {[
          {
            title: 'What personal information do we process?',
            answer: <span>
              We do not process any of your personal information. We don’t collect any
              of your personal information via the website
              {' '}
              <MeeUrl text="https://mee.foundation" />
            </span>,
          },
          {
            title: 'Do we process any sensitive personal information?',
            answer: 'NO. We do not process any sensitive personal information.',
          },
          {
            title: ' Do we receive any information from third parties?',
            answer: 'NO. We don’t receive any information from third parties.',
          },
          {
            title: 'How do we process your information?',
            answer: 'We do not process any of your personal information.',
          },
          {
            title: 'In what situations and with which parties do we share personal information?',
            answer: 'We never share personal information with any other parties.',
          },
          {
            title: 'When and with whom do we share your personal information?',
            answer: 'We do not share any of your personal information.',
          },
          {
            title: 'How long do we keep your information?',
            answer: 'We do not keep any of your personal information.',
          },
          {
            title: 'Controls for do-not-track features?',
            answer: <span>
              We do not use cookies and trackers on our website. The website
              {' '}
              <MeeUrl text="https://mee.foundation" />
              {' '}
              does not have any interactive elements and doesn&#39;t require any sort
              of login or account information from the users.
            </span>,
          },
          {
            title: 'Do we make updates to this notice?',
            answer: <>
              <span>
                Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </span>
              <span className="pt-3">
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated “Revised” date of the updated version will be
                effective as soon as it is accessible. We encourage you to review this privacy notice
                frequently to be informed of how we are protecting your information.
              </span>
            </>,
          },
          {
            title: 'How can you contact us about this notice?',
            answer: <span>
              If you have questions or comments about this notice, you may email us at
              {' '}
              <MeeUrl text="contact@mee.foundation" url="mailto:contact@mee.foundation" />
              {' '}
              or by post to:
              {' '}
              <span className="font-medium">Mee Project Inc, 25 Craftsland Road, Chestnut Hill, MA 02467, United States</span>
            </span>,
          },
        ].map((item) => (
          <Section key={item.title} title={item.title} answer={item.answer} />
        ))}
        <p className="pt-10">
          Last updated November 09, 2022
        </p>
      </div>
      <Footer />
    </div>

  </MaxW>

);
