import React, {useEffect, useState} from 'react';
import {ActionButton} from '../components/ActionButton';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';
import type {MeeResponse} from 'mee-js-sdk';

export const CongratuationPage: React.FC = () => {
  const [meeData, setMeeData] = useState<MeeResponse | null>(null);

  useEffect(() => {
    try {
      const userDataStringified = localStorage.getItem('userData');
      if (userDataStringified === null) {
        window.location.href = '/';
        return;
      }
      const parsedData = JSON.parse(window.atob(userDataStringified));
      setMeeData(parsedData);

      localStorage.clear();
    } catch {
      window.location.href = '/';
    }
  }, []);

  const name = meeData?.data?.name as string;

  return (
    <MaxW>
      <div data-theme="meeTheme">
        <Header />
        <div className="max-w-86 mx-auto min-h-screen px-4 py-5 text-black">
          <h1>Hello, {name}!</h1>

          <p className="pb-4 pt-2">
            You have successfully created the connection with Mee!
          </p>

          <p className="pb-4 pt-2">
            Click Back to enjoy the Mee website experience and learn more about
            us.
          </p>

          <div className="mx-auto flex w-32 flex-col gap-4 pt-8">
            <ActionButton
              title="Back"
              onClick={() => {
                window.location.href = '/';
              }}
            />
          </div>
        </div>

        <Footer />
      </div>
    </MaxW>
  );
};
