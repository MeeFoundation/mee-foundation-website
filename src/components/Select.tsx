import clsx from 'clsx';
import React from 'react';
import { SelectItem } from 'src/model/selectItem';

interface SelectProps {
  values: SelectItem[];
  currentValue: string;
  placeHolder?: string;
  showEmptyValue?: boolean;
  onChange: (newValue: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  values, onChange, currentValue, placeHolder = '', showEmptyValue = false,
}) => (
  <select
    onChange={(e) => onChange(e.currentTarget.value)}
    className={clsx('select select-bordered w-full max-w-xs')}
    value={currentValue}
  >
    {(placeHolder !== '' || showEmptyValue) && <option disabled={!showEmptyValue} selected={currentValue === ''}>{placeHolder}</option>}
    {values.map((value) => (
      <option
        key={value.value}
        value={value.value}
      >
        {value.caption}
      </option>
    ))}
  </select>
);
