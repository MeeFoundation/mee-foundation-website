import clsx from 'clsx';
import React, { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import EyeIcon from '../assets/eye.svg';
import ClosedEyeIcon from '../assets/closedEye.svg';

interface SecretBoxProps {
  value?: string;
  title: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isHiddenByDefault?: boolean;
  onChange?: (newValue: string) => void;
  error?: string;
  register?: UseFormRegisterReturn;
}

export const SecretBox: React.FC<SecretBoxProps> = ({
  onChange, value, title, isRequired = false, isReadOnly = false, isHiddenByDefault = false,
  error, register,
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
            'w-full border text-alt-color-4 text-base py-2 px-3 outline-none',
            isReadOnly ? 'bg-secondary-content' : 'bg-primary-content',
            error ? 'border-error' : 'border-alt-color-6 focus:border-primary',
          )}
          readOnly={isReadOnly}
          id={title}
          type={isValueHidden ? 'password' : 'text'}
          value={value}
          onChange={(e) => {
            onChange?.(e.currentTarget.value);
          }}
          {...register}
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
      {error && <p className="text-error text-sm pt-1">{error}</p>}
    </div>
  );
};
