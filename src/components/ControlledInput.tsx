/* eslint-disable react/function-component-definition */
import clsx from 'clsx';
import React, { useState } from 'react';
import { Control, Controller, Path } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

interface ControlledInputProps<T> {
  control: Control<T>;
  fieldName: Path<T>;
  placeHolder: string;
  onValuesChanged?: (e: React.FormEvent<HTMLInputElement>) => void;
  ruleRegexp?: RegExp;
  required?: boolean;
  autocomplete?: boolean;
  errorText?: string;
  fieldType: React.HTMLInputTypeAttribute;
  tooltip?: string;
}

export function ControlledInput<T>({
  control, onValuesChanged, fieldName, placeHolder,
  ruleRegexp, errorText, required = false, fieldType, autocomplete = false, tooltip,
}: ControlledInputProps<T>): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Controller
      control={control}
      rules={{ required, pattern: ruleRegexp }}
      name={fieldName}
      render={({
        field: {
          onChange, onBlur, value, name, ref,
        },
        fieldState: {
          error,
        },
      }) => (
        <>
          <div className="">
            <label
              htmlFor={name}
              className={clsx('label tooltip-right', tooltip !== '' && 'tooltip')}
              data-tip={tooltip}
            >
              <span className="label-text">{placeHolder}</span>
            </label>
          </div>

          <div className="relative w-full">
            {fieldType === 'password' && (
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword
                  ? <EyeOffIcon className="transition-all duration-300 opacity-30 hover:opacity-90 mr-1 text-base-content h-4 w-4" />
                  : <EyeIcon className="transition-all duration-300 opacity-30 hover:opacity-90 mr-1 text-base-content h-4 w-4" />}
              </button>
            </div>
            )}
            <input
              id={name}
              name={name}
              ref={ref}
              autoComplete={autocomplete ? undefined : 'new-password'}
              onChange={(e) => {
                onChange(e);
                onValuesChanged?.(e);
              }}
              onBlur={onBlur}
              value={value as string | undefined}
              placeholder={placeHolder}
              className={clsx('input input-bordered my-3 w-full input-primary', error && 'input-error')}
              type={showPassword ? 'text' : fieldType}
            />
          </div>

          {error && (
          <label
            htmlFor={name}
            className="label pt-0"
          >
            <span className="label-text-alt">{error.message || errorText}</span>
          </label>
          )}
        </>
      )}
    />
  );
}

ControlledInput.defaultProps = {
  required: false,
  autocomplete: false,
  onValuesChanged: () => {},
  errorText: '',
  ruleRegexp: undefined,
  tooltip: '',
};
