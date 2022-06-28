import clsx from 'clsx';
import React, { useState } from 'react';
import EyeIcon from '../assets/eye.svg';
import ClosedEyeIcon from '../assets/closedEye.svg';

interface SecretBoxProps {
  value: string;
  title: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isHiddenByDefault?: boolean;
  onChange: (newValue: string) => void;
}

export const SecretBox: React.FC<SecretBoxProps> = ({
  onChange, value, title, isRequired = false, isReadOnly = false, isHiddenByDefault = false,
}) => {
  const [isValueHidden, setValueHidden] = useState(isHiddenByDefault);

  return (
    <div className="flex flex-col pb-5">
      <label className="text-alt-color-4 text-sm font-bold pb-1" htmlFor={title}>
        {title}
        {isRequired && <span className="text-accent-text"> *</span>}
      </label>
      <div className="w-full relative">
        <input
          className={clsx(
            'border-alt-color-6 w-full border text-alt-color-4 text-base py-2 px-3 outline-none focus:border-primary',
            isReadOnly ? 'bg-secondary-content' : 'bg-primary-content',
          )}
          readOnly={isReadOnly}
          id={title}
          type={isValueHidden ? 'password' : 'text'}
          value={value}
          onChange={(e) => {
            onChange(e.currentTarget.value);
          }}
        />
        <button
          type="button"
          className="absolute right-3 top-3"
          onClick={() => {
            setValueHidden((old) => !old);
          }}
        >
          <img src={isValueHidden ? EyeIcon : ClosedEyeIcon} alt="eye" />
        </button>

      </div>

    </div>
  );
};
