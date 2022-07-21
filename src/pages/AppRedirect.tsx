import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PARTNER_ID = 'partnerId';
export const IOS_UNIVERSAL_LINK = 'https://universal-link';
export const IOS_HARDLINK_BASE = 'mee://consent/';

export const AppRedirect: React.FC = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (partnerId) {
        localStorage.setItem(PARTNER_ID, partnerId);
        // eslint-disable-next-line no-console
        console.log(partnerId);
      } else {
        // eslint-disable-next-line no-console
        console.log('empty');
      }
    } finally {
      // eslint-disable-next-line no-console
      console.log('navigate');
      // navigate(IOS_UNIVERSAL_LINK);
    }
  }, [navigate, partnerId]);
  return (
    <div className="h-screen flex flex-row items-center justify-center">
      <p className="text-black animate-bounce pointer-events-none">Please wait</p>
    </div>
  );
};
