import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../assets/arrowRight.svg';
import { ActionButton } from './ActionButton';

interface SecretCollectionsPathProps {
  collectionName?: string;
  actionButtonTitle?: string;
  actionButtonAction?: () => void;
}

export const SecretCollectionsPath: React.FC<SecretCollectionsPathProps> = ({
  collectionName,
  actionButtonTitle,
  actionButtonAction,
}) => {
  const showCollectionName = typeof collectionName !== 'undefined';
  return (
    <div className="bg-primary-content pt-5">
      <div className={clsx('px-2 text-xs md:text-xl font-bold flex items-center flex-wrap', showCollectionName ? 'justify-start' : 'justify-between')}>
        <Link to="/" className={clsx(showCollectionName ? 'text-alt-color-1' : 'text-primary', 'pb-5')}>Your Secret Collections</Link>
        {showCollectionName
          && (
            <div className="text-primary flex items-center mr-auto pb-5">
              <img className="px-4" alt="arrow right" src={ArrowRight} />
              <p>{collectionName}</p>
            </div>
          )}
        {actionButtonTitle
         && actionButtonAction
         && (
         <div className="pb-5">
           <ActionButton title={actionButtonTitle} onClick={actionButtonAction} />
         </div>
         )}
      </div>
    </div>
  );
};
