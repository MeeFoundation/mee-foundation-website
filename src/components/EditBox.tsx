import React, { useState } from 'react';

interface EditBoxProps {
  initialValue: string;
  title: string;
  isRequired?: boolean;
}

export const EditBox: React.FC<EditBoxProps> = ({ initialValue, title, isRequired }) => {
  const [value, setValue] = useState(initialValue);
  return (
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
          setValue(e.currentTarget.value);
        }}
      />

    </div>
  );
};
