import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MaxW } from './components/MaxW';
import { SignInUpPage } from './pages/SignInUpPage';

export const App: React.FC = () => (
  <BrowserRouter>
    <MaxW>
      <Routes>
        <Route path="/" element={<SignInUpPage />} />
      </Routes>
    </MaxW>
  </BrowserRouter>
);
