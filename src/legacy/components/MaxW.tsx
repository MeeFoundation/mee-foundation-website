import React from 'react';

interface MaxWProps {
  children: JSX.Element;
}

export const MaxW: React.FC<MaxWProps> = ({ children }) => (
  <div className="bg-primary-content">
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </div>
);
