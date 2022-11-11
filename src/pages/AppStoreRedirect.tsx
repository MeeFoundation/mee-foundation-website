import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APP_STORE_LINK, PARTNER_DATA } from './DownloadPage';

export const AppStoreRedirect: React.FC = () => {
  const { partnerData } = useParams<{ partnerData: string }>();
  useEffect(() => {
    try {
      if (partnerData) localStorage.setItem(PARTNER_DATA, partnerData);
    } finally {
      window.location.href = APP_STORE_LINK;
    }
  }, [partnerData]);
  return (
    <div />
  );
};
