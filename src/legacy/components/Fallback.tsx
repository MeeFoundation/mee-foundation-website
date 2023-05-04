import React from 'react';
import loadingIcon from '../assets/loading.svg';

export const Fallback: React.FC = () => (
  <div className="w-full h-96 flex flex-col items-center justify-center">
    <div className="relative">
      <img className="animate-expanse" alt="loading" src={loadingIcon} />
      <div className="absolute top-0 bottom-0 left-0 right-0 text-primary flex flex-col justify-center items-center">
        <p className="text-sm">Loading</p>
      </div>
    </div>
  </div>

);
