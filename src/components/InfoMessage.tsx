import React, { useEffect } from 'react';
import OkIcon from '../assets/ok.svg';
import CloseIcon from '../assets/close.svg';

interface InfoMessageProps {
  message: string;
  onClose: () => void;
}

export const InfoMessage: React.FC<InfoMessageProps> = ({ message, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 3000);
  });
  return (
    <div className="fixed bottom-10 left-0 w-screen">
      <div className="mx-2 xs:mx-auto p-5 gap-3 bg-primary-content items-center flex max-w-96 shadow-lg">
        <img src={OkIcon} alt="Ok" />
        <p className="text-alt-color-4 text-sm font-bold w-70">{message}</p>
        <button type="button" onClick={onClose}>
          <img src={CloseIcon} alt="close" />
        </button>
      </div>
    </div>
  );
};
