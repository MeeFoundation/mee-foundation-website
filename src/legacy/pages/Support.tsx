import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MaxW } from '../components/MaxW';

export const SupportPage: React.FC = () => (
  <MaxW>
    <div data-theme="meeTheme">
      <Header />
      <div className="text-black min-h-screen pt-5 px-4 text-center mx-auto">
        <h1 className="text-lg pb-5">
          Need some help?
        </h1>
        <p className="text-lg">Please contact us at contact@mee.foundation.</p>
      </div>

      <Footer />
    </div>
  </MaxW>
);