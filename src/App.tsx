import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MeeCertifiedPage } from './pages/MeeCertified';

export const App: React.FC = () => (
  <BrowserRouter>
    {/*  <MaxW>
       <Suspense fallback={<Fallback />}>
         <Header />
         <Routes>
           <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
           <Route path="/storage-demo" element={<PublicRoute><SignInUpPage /></PublicRoute>} />
           <Route path="/collections" element={<PrivateRoute><CollectionsList /></PrivateRoute>} />
           <Route path="/collection/:collectionId" element={<PrivateRoute><SecretsList /></PrivateRoute>} />
           <Route path="/congratulations" element={<PrivateRoute><CongratulationsScreen /></PrivateRoute>} />
           <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
       </Suspense>
    </MaxW> */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mee-certified" element={<MeeCertifiedPage />} />
    </Routes>
  </BrowserRouter>
);
