import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from 'src/components/ActionButton';
import MeeButtonIcon from '../assets/meeButton.svg';

export const CongratulationsScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-primary flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h1 className="pb-2 text-2xl font-bold md:text-4xl">Congratulations!</h1>
        <p className="pb-12 text-center text-2xl md:text-4xl max-w-83 md:w-97 md:max-w-max">Your secret has been securely saved!</p>
        <ActionButton
          icon={MeeButtonIcon}
          title="Back to App"
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </div>
  );
};
