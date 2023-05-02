import React from 'react';

interface MaxWProps {
  children: JSX.Element;
}

export const MaxW: React.FC<MaxWProps> = ({ children }) => (
  <div className="bg-primary-content overflow-auto">
    <div className="min-w-[320px] max-w-5xl mx-auto">
      {children}
    </div>
  </div>
);
