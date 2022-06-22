import React, { useEffect } from 'react';
import CloseIcon from '../assets/close.svg';
import { ActionButton } from './ActionButton';

interface PopupProps {
  title: string;
  primaryButtonAction: () => void;
  primaryButtonTitle: string;
  secondaryButtonAction?: () => void;
  secondaryButtonTitle?: string;
  children: JSX.Element;
}

export const Popup: React.FC<PopupProps> = ({
  title,
  primaryButtonAction,
  secondaryButtonAction,
  primaryButtonTitle,
  secondaryButtonTitle,
  children,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className="flex h-screen w-screen top-0 left-0 text-primary fixed bg-alt-color-4 bg-opacity-75">
      <div className="bg-primary-content w-full my-auto mx-2 pt-6 px-5 pb-5 rounded-lg shadow-popup md:max-w-md md:mx-auto">
        <div className="flex justify-between items-center pb-6">
          <h1 className="text-alt-color-4 text-lg font-bold">{title}</h1>
          <img alt="close" src={CloseIcon} />
        </div>

        <div>
          {children}
        </div>
        <div className="flex justify-between">
          {secondaryButtonAction
    && <ActionButton isSecondary onClick={secondaryButtonAction} title={secondaryButtonTitle || ''} />}
          <div className="ml-auto">
            <ActionButton onClick={primaryButtonAction} title={primaryButtonTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};
