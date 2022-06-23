import clsx from 'clsx';
import React from 'react';

interface ActionButtonProps {
  title: string;
  onClick: () => void;
  icon?: string;
  isSecondary?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  title, onClick, icon, isSecondary = false,
}) => (
  <button
    className={clsx('h-9 pr-4 text-sm font-bold shadow-sm flex items-center gap-3 hover:shadow-lg', isSecondary ? 'bg-secondary-content' : 'bg-primary', icon ? 'pl-1' : 'pl-4')}
    type="button"
    onClick={onClick}
  >
    {icon && <img className="w-6 h-6 pl-1" alt="button icon" src={icon} />}
    <p className={clsx(isSecondary ? 'text-primary' : 'text-primary-content')}>{title}</p>
  </button>
);
