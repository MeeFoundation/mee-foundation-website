import React, { useEffect, useState } from 'react';

const GOOGLE_CLIENT_ID = '1068663547489-v8r52oe3fbsv6smg9ku3a6ji0c3jakgn.apps.googleusercontent.com';

export const GoogleSignin = () => {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const [user, setUser] = useState<string | undefined>(undefined);

  const handleGoogleSignIn = (res: CredentialResponse) => {
    if (!res.clientId || !res.credential) return;
    // eslint-disable-next-line no-console
    console.log(res);
    //

    setUser(res.credential);
  };

  const initializeGsi = () => {
    if (!window.google || gsiScriptLoaded) return;
    setGsiScriptLoaded(true);
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleSignIn,
      ux_mode: 'redirect',
      login_uri: 'http://localhost:3000/login',
      context: 'use',
    });
    window.google.accounts.id.renderButton(
      document.getElementById('sign_in_w_google'),
      {
        theme: 'outline',
        size: 'large',
        type: 'standard',
        shape: 'rectangular',
        logo_alignment: 'left',
      },
    );
    // window.google.accounts.id.prompt();
    // window.google.accounts.id.prompt((notification) => {
    //   // eslint-disable-next-line no-console
    //   console.log(notification);
    //   if (notification.isNotDisplayed() || notification.isSkippedMoment()) {

    //     // continue with another identity provider.
    //   }
    // });
  };

  useEffect(() => {
    if (user || gsiScriptLoaded) return undefined;

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = initializeGsi;
    script.async = true;
    script.id = 'google-client-script';
    document.querySelector('body')?.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
      document.getElementById('google-client-script')?.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div id="sign_in_w_google" />
    </div>
  );
};
