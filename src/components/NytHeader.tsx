/* eslint-disable react/require-default-props */
import React from 'react';
import MainLogo from '../assets/nyt.png';

const HeaderImage: React.FC = () => (<div className="w-48"><img className="" src={MainLogo} alt="Logo" /></div>);

interface HeaderProps {
  showIcons?: boolean;
}

export const NytHeader: React.FC<HeaderProps> = ({ showIcons = true }) => (
  <header className="bg-white text-black text-opacity-60 text-sm font-robotoCondensed font-semibold shadow-header border-b border-gray border-opacity-20">
    <div className={`max-w-270 mx-auto flex flex-row items-center ${showIcons ? 'justify-between pt-2 pb-1' : 'justify-center py-4'} px-4`}>
      {showIcons && (
        <svg className="w-4" viewBox="0 0 16 16">
          <rect x="1" y="3" fill="#333" width="14" height="2" />
          <rect x="1" y="7" fill="#333" width="14" height="2" />
          <rect x="1" y="11" fill="#333" width="14" height="2" />
        </svg>
      )}
      <HeaderImage />
      {showIcons && (

        <button
          type="button"
          onClick={() => {

          }}
        >
          <svg className="w-4" viewBox="0 0 20 20" fill="#333" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2379 6C14.2379 8.20914 12.4471 10 10.2379 10C8.02878 10 6.23792 8.20914 6.23792 6C6.23792 3.79086 8.02878 2 10.2379 2C12.4471 2 14.2379 3.79086 14.2379 6Z" fill="#333" />
            <path d="M16.2355 14.5714C16.2371 14.5477 16.2379 14.5239 16.2379 14.5C16.2379 13.1193 13.5516 12 10.2379 12C6.92421 12 4.23792 13.1193 4.23792 14.5C4.23792 14.5239 4.23872 14.5477 4.24032 14.5714H4.23792V18H16.2379V14.5714H16.2355Z" fill="#333" />
          </svg>
        </button>
      )}
    </div>
  </header>
);
