import { useAtom, useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from 'src/components/ActionButton';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { MaxW } from 'src/components/MaxW';
import { MeeAuthState, SubscribedState } from 'src/state/MeeAuthState';

export const SubscribePage: React.FC = () => {
  const meeData = useAtomValue(MeeAuthState);
  const [isSubscribed, setSubscribed] = useAtom(SubscribedState);
  const navigate = useNavigate();

  useEffect(() => {
    if (meeData === null
     || typeof meeData?.data === 'undefined'
     || typeof meeData?.data?.name === 'undefined'
    ) {
      navigate('/');
    }
  }, [meeData, navigate]);

  const name = meeData?.data?.name;

  const [email, setEmail] = useState<string | undefined>(meeData?.data?.email);

  return (
    <MaxW>
      <>
        <Header />
        <div className="text-black min-h-screen py-5 px-4 max-w-86 mx-auto">
          <h1>
            Hello,
            {' '}
            {name}
            !
          </h1>
          <p className="pb-4 pt-2">
            {isSubscribed
              ? 'You successfully subscribed to our newsletter.'
              : 'Would you like to subscribe to our newsletter and receive updates related to The Mee Foundation activities?'}
          </p>
          {isSubscribed
          || (
          <input
            placeholder="Email"
            className="border-alt-color-6 border px-2 py-2 w-full"
            value={email}
            onChange={((e) => setEmail(e.currentTarget.value))}
          />
          )}
          <div className="mx-auto w-32 flex flex-col gap-4 pt-8">

            {isSubscribed || (
            <ActionButton
              title="Subscribe"
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('email: ', email);
                setSubscribed(true);
              }}
            />
            )}

            <ActionButton
              title="Back"
              onClick={() => {
                navigate('/');
              }}
            />
          </div>

        </div>

        <Footer />
      </>
    </MaxW>
  );
};
