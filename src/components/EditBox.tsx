import clsx from 'clsx';
import React, { useRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface EditBoxProps {
  value?: string;
  title: string;
  isRequired?: boolean;
  onChange?: (newValue: string) => void;
  onBlur?: () => void;
  error?: string;
  register?: UseFormRegisterReturn;
}

export const EditBox: React.FC<EditBoxProps> = ({
  value, title, isRequired, onChange, error, register, onBlur,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="flex flex-col pb-5">
      <label className="text-alt-color-4 text-sm font-bold pb-1" htmlFor={title}>
        {title}
        {isRequired && <span className="text-accent-text"> *</span>}
      </label>
      <input
        onBlur={onBlur}
        ref={inputRef}
        className={clsx(
          'border text-alt-color-4 text-base py-2 px-3 outline-none',
          error ? 'border-error' : 'border-alt-color-6 focus:border-primary',
        )}
        id={title}
        type="text"
        value={value}
        onChange={(e) => {
          onChange?.(e.currentTarget.value);
        }}
        {...register}
      />
      {error && <p className="text-error text-sm pt-1">{error}</p>}

    </div>
  );
};
