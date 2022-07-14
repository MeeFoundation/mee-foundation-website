import { Suspense } from 'react';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fallback } from './components/Fallback';
import { MaxW } from './components/MaxW';
import { LandingPage } from './pages/LandingPage';
import { MeeCertifiedPage } from './pages/MeeCertified';

export const App: React.FC = () => (
  <BrowserRouter>
    {/*  <MaxW>
         <Routes>
           <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
           <Route path="/storage-demo" element={<PublicRoute><SignInUpPage /></PublicRoute>} />
           <Route path="/collections" element={<PrivateRoute><CollectionsList /></PrivateRoute>} />
           <Route path="/collection/:collectionId" element={<PrivateRoute><SecretsList /></PrivateRoute>} />
           <Route path="/congratulations" element={<PrivateRoute><CongratulationsScreen /></PrivateRoute>} />
           <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>

    </MaxW> */}
    <MaxW>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mee-certified" element={<MeeCertifiedPage />} />
        </Routes>
      </Suspense>
    </MaxW>
  </BrowserRouter>
);
