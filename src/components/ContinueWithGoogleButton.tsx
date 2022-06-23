import { useSetAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { fakeAuthToken } from 'src/api/AuthMockApi';
import { AuthState } from 'src/state/AuthState';

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

export const FakeGoogleButton: React.FC = () => {
  const setAuthState = useSetAtom(AuthState);
  return (
    <button
      type="button"
      onClick={() => {
        setAuthState(fakeAuthToken);
      }}
    >
      <div className="flex items-center gap-2 py-3 px-10 bg-white text-sm font-bold text-google-font-color hover:shadow-lg">
        <svg aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18">
          <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z" fill="#4285F4" />
          <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z" fill="#34A853" />
          <path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z" fill="#FBBC05" />
          <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z" fill="#EA4335" />
        </svg>
        <p>Continue with Google</p>
      </div>

    </button>

  );
};
