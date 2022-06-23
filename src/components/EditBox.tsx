import React from 'react';

interface EditBoxProps {
  value: string;
  title: string;
  isRequired?: boolean;
  onChange: (newValue: string) => void;
}

export const EditBox: React.FC<EditBoxProps> = ({
  value, title, isRequired, onChange,
}) => (
  <div className="flex flex-col pb-5">
    <label className="text-alt-color-4 text-sm font-bold pb-1" htmlFor={title}>
      {title}
      {isRequired && <span className="text-accent-text"> *</span>}
    </label>
    <input
      className="border-alt-color-6 border text-alt-color-4 text-base py-2 px-3 outline-none focus:border-primary"
      id={title}
      type="text"
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value);
      }}
    />

  </div>
);
