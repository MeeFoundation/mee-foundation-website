import React from 'react';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';
import { ContinueWithGoogleButton } from 'src/components/ContinueWithGoogleButton';
import illustration from '../assets/mee_illustration_1.jpg';

export const SignInUpPage: React.FC = () => (
  <div>
    <Header />
    <div className="sub-header bg-primary flex flex-col items-center ">
      <div className="flex flex-wrap justify-center text-center font-ps mt-4 mb-2 whitespace-pre-wrap text-2xl lg:text-3xl leading-7">
        <h1 className="text-secondary"><b>Hello.</b></h1>
        <h1>{' '}</h1>
        <h1 className="text-primary-content">
          It&apos;s
          {' '}
          <i>Mee Secret Storage</i>
          .
        </h1>

      </div>
      <div className="pb-7 px-4">
        <p className="max-w-lg text-center">
          On this site you can securely store your passphrase fragment.
          Your fragment will be encrypted and can only be decrypted by you.
        </p>
      </div>
      <div className="py-15 text-primary px-4 bg-image-background w-full flex flex-col items-center">
        <p className="font-bold text-center pb-3 max-w-67 lg:max-w-84">
          Please authorize access to this site
          using your Google account
        </p>
        <div className="">
          <ContinueWithGoogleButton onClick={() => {
          // eslint-disable-next-line no-console
            console.log('fired');
          }}
          />
        </div>

      </div>
      <img src={illustration} alt="mee-illustration" className="max-w-full" />
    </div>
    <div>
      <h2 className="text-primary text-xl lg:text-2xl text-center mt-8 mx-2"><b>Good for everyone.</b></h2>
    </div>
    <Footer />
  </div>
);
