import { Suspense, useEffect } from 'react';
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
import { ProfilePage } from './pages/ProfilePage';
import { MeeAuthState } from './state/MeeAuthState';

export const App: React.FC = () => {
  const navigate = useNavigate();
  const setUserData = useSetAtom(MeeAuthState);
  useEffect(() => {
    init({
      client_metadata: {
        client_name: 'Mee Foundation',
        logo_uri: 'http://localhost:3000/favicon.png',
        display_url: 'nytimes.com',
        contacts: [],
      },
      redirect_uri: 'http://localhost:3000/',
      container_id: 'mee-button-container',
      claims: {
        id_token: {
          name: {
            attribute_type: 'https://schema.org/name',
            name: 'Name',
            typ: 'string',
            essential: true,
            retention_duration: MeeConsentDuration.ephemeral,
            business_purpose: '',
            is_sensitive: true,
          },
          email: {
            attribute_type: 'https://schema.org/email',
            name: 'Email',
            typ: 'email',
            essential: false,
            retention_duration: MeeConsentDuration.ephemeral,
            business_purpose: '',
            is_sensitive: true,
          },
        },
      },
    }, (data) => {
      // eslint-disable-next-line no-console
      console.log('data: ', data);
      setUserData(data);
      navigate('/profile');
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mee-certified" element={<MeeCertifiedPage />} />
        <Route path="/mee-compatible" element={<MeeCompatiblePage />} />
        <Route path="/consent/:partnerData" element={<AboutMeePage />} />
        <Route path="/redirect/:partnerData" element={<AppStoreRedirect />} />
        <Route path="/installed" element={<InstallationSucceed />} />
        <Route path="/installed/:partnerData" element={<InstallationSucceed />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
