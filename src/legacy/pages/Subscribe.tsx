import clsx from 'clsx';
import {useAtom, useAtomValue} from 'jotai';
import React, {useEffect, useState} from 'react';
import {ActionButton} from '../components/ActionButton';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {MaxW} from '../components/MaxW';
import {SubscribedState} from '../state/MeeAuthState';
import type {MeeResponse} from 'mee-js-sdk';

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/g;

export const SubscribePage: React.FC = () => {
  const [meeData, setMeeData] = useState<MeeResponse | null>(null);
  const [isSubscribed, setSubscribed] = useAtom(SubscribedState);
  const [email, setEmail] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      const userDataStringified = localStorage.getItem('userData');
      if (userDataStringified === null) {
        window.location.href = '/';
        return;
      }
      const parsedData = JSON.parse(window.atob(userDataStringified));
      setMeeData(parsedData);
      setEmail(parsedData?.data.email);
      localStorage.clear();
    } catch {
      window.location.href = '/';
    }
  }, []);

  const name = meeData?.data?.name as string;

  const [error, setError] = useState<string | null>(null);

  return (
    <MaxW>
      <div data-theme="meeTheme">
        <Header />
        <div className="max-w-86 mx-auto min-h-screen px-4 py-5 text-black">
          <h1>Hello, {name}!</h1>
          <p className="pb-4 pt-2">
            {isSubscribed
              ? 'You successfully subscribed to our newsletter.'
              : 'Would you like to subscribe to our newsletter and receive updates related to The Mee Foundation activities?'}
          </p>
          {isSubscribed || (
            <div>
              <input
                placeholder="Email"
                className={clsx(
                  'border-alt-color-6 w-full border px-2 py-2 outline-none focus:border-primary',
                  error && 'border-red-500 focus:border-red-500',
                )}
                value={email}
                onChange={(e) => {
                  setError(null);
                  setEmail(e.currentTarget.value);
                }}
              />
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
          <div className="mx-auto flex w-32 flex-col gap-4 pt-8">
            {isSubscribed || (
              <ActionButton
                title="Subscribe"
                onClick={() => {
                  if (
                    typeof email === 'undefined' ||
                    !email.trim().match(emailValidationRegex)
                  ) {
                    setError('Incorrect Email');
                    return;
                  }
                  setSubscribed(true);
                }}
              />
            )}

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
