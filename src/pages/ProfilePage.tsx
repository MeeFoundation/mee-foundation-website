import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from 'src/components/ActionButton';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import { MaxW } from 'src/components/MaxW';
import { MeeAuthState } from 'src/state/MeeAuthState';

export const ProfilePage: React.FC = () => {
  const meeData = useAtomValue(MeeAuthState);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof meeData === 'undefined'
     || meeData === null
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
        <div className="text-black min-h-screen py-5 px-4">
          <h1>
            Hello,
            {' '}
            {name}
            !
          </h1>
          <p>Would you like to subscribe for Mee updates?</p>
          <p className="pb-6">Please enter your email:</p>
          <input className="border-alt-color-6 border px-2 py-2 w-full" value={email} onChange={((e) => setEmail(e.currentTarget.value))} />
          <div className="mx-auto w-32 flex flex-col gap-4 pt-8">

            <ActionButton
              title="Subscribe"
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('email: ', email);
              }}
            />

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
