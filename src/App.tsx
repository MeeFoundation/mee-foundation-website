import { Suspense, useEffect, useState } from 'react';
import {
  Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';
import { init, MeeConsentDuration } from 'mee-js-sdk';
import { useSetAtom } from 'jotai';
import { Fallback } from './components/Fallback';
import { AboutMeePage } from './pages/AboutMee';
import { AppStoreRedirect } from './pages/AppStoreRedirect';
import { InstallationSucceed } from './pages/InstallationSucceed';
import { LandingPage } from './pages/LandingPage';
import { MeeCertifiedPage } from './pages/MeeCertified';
import { MeeCompatiblePage } from './pages/MeeCompatible';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { SubscribePage } from './pages/SubscribePage';
import { SupportPage } from './pages/SupportPage';
import { MeeAuthState } from './state/MeeAuthState';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  const navigate = useNavigate();
  const setUserData = useSetAtom(MeeAuthState);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    init({
      client_metadata: {
        client_name: 'Mee Foundation',
        logo_uri: 'https://mee.foundation/favicon.png',
        display_url: 'mee.foundation',
        contacts: [],
      },
      redirect_uri: 'https://mee.foundation/',
      claims: {
        id_token: {
          name: {
            attribute_type: 'https://schema.org/name',
            name: 'First Name',
            typ: 'string',
            essential: true,
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
          },
          email: {
            attribute_type: 'https://schema.org/email',
            name: 'Email',
            typ: 'email',
            essential: false,
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
          },
        },
      },
    }, (data) => {
      setUserData(data);
      if (data !== null
        && typeof data?.data !== 'undefined'
        && typeof data?.data.name !== 'undefined'
      ) {
        navigate('/subscribe');
      } else {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {showToast && (
      <div className="toast toast-top toast-center">
        <div className="alert alert-error"><span>Connection attempt was unsuccessful</span></div>
      </div>
      )}
      <Suspense fallback={<Fallback />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mee-certified" element={<MeeCertifiedPage />} />
          <Route path="/mee-compatible" element={<MeeCompatiblePage />} />
          <Route path="/consent/:partnerData" element={<AboutMeePage showQrCode />} />
          <Route path="/cdconsent/:partnerData" element={<AboutMeePage />} />
          <Route path="/redirect/:partnerData" element={<AppStoreRedirect />} />
          <Route path="/installed" element={<InstallationSucceed />} />
          <Route path="/installed/:partnerData" element={<InstallationSucceed />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
