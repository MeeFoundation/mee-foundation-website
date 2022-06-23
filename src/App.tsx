import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fallback } from './components/Fallback';
import { Header } from './components/Header';
import { MaxW } from './components/MaxW';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { SecretsList } from './pages/SecretsList';
import { CollectionsList } from './pages/CollectionsList';
import { SignInUpPage } from './pages/SignInUpPage';
import { CongratulationsScreen } from './pages/CongratulationsScreen';

export const App: React.FC = () => (
  <BrowserRouter>
    <MaxW>
      <Suspense fallback={<Fallback />}>
        <Header />
        <Routes>
          <Route path="/" element={<PublicRoute><SignInUpPage /></PublicRoute>} />
          <Route path="/collections" element={<PrivateRoute><CollectionsList /></PrivateRoute>} />
          <Route path="/collection/:collectionId" element={<PrivateRoute><SecretsList /></PrivateRoute>} />
          <Route path="/congratulations" element={<PrivateRoute><CongratulationsScreen /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </MaxW>
  </BrowserRouter>
);
