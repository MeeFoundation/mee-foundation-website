import React from 'react';

interface LinkButtonProps {
  title: string;
  onClick: () => void
}

export const LinkButton: React.FC<LinkButtonProps> = ({ title, onClick }) => (
  <button onClick={onClick} type="button" className="text-sm">{title}</button>
);
