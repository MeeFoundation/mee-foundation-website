import clsx from 'clsx';
import React from 'react';
import styles from './Checkbox.module.css';

type CheckBoxIconProps = {
  checked: boolean;
};

const CheckBoxIcon: React.FC<CheckBoxIconProps> = ({
  checked,
}) => (
  <svg className={clsx(styles.svg, 'border-alt-color-6 rounded', checked ? 'border-0' : 'border')} width="18" height="18" viewBox="0 0 16 16">

    {/* <polyline
      className={clsx(styles.check, checked && styles.checked)}
      stroke="#FFFFFF"
      strokeWidth="2"
      points="4 8.25272311 7.44025036 11.9148756 13.9785369 5"
    /> */}
    {checked && (
    <>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="#4E868E" />
      <path d="M12.207 4.79303C12.3945 4.98056 12.4998 5.23487 12.4998 5.50003C12.4998 5.76519 12.3945 6.0195 12.207 6.20703L7.207 11.207C7.01947 11.3945 6.76516 11.4998 6.5 11.4998C6.23483 11.4998 5.98052 11.3945 5.793 11.207L3.793 9.20703C3.61084 9.01843 3.51004 8.76583 3.51232 8.50363C3.5146 8.24143 3.61977 7.99062 3.80518 7.80521C3.99058 7.6198 4.2414 7.51463 4.50359 7.51236C4.76579 7.51008 5.01839 7.61087 5.20699 7.79303L6.5 9.08603L10.793 4.79303C10.9805 4.60556 11.2348 4.50024 11.5 4.50024C11.7652 4.50024 12.0195 4.60556 12.207 4.79303Z" fill="white" />
      <path d="M4 1H12V-1H4V1ZM15 4V12H17V4H15ZM12 15H4V17H12V15ZM1 12V4H-1V12H1ZM4 15C2.34315 15 1 13.6569 1 12H-1C-1 14.7614 1.23858 17 4 17V15ZM15 12C15 13.6569 13.6569 15 12 15V17C14.7614 17 17 14.7614 17 12H15ZM12 1C13.6569 1 15 2.34315 15 4H17C17 1.23858 14.7614 -1 12 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#4E868E" />
    </>
    )}

  </svg>
);

type CheckboxProps = {
  onChange: (value: boolean) => void;
  onBlur?: () => void;
  value: boolean;
  disabled?: boolean;
  title: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  onBlur,
  value: checked = false,
  disabled = false,
  title,
}) => (
  <div className="flex items-center gap-2">
    <div
      aria-checked={checked}
      onBlur={onBlur}
      role="checkbox"
      tabIndex={0}
      className={clsx(
        styles.inner,
        'outline-none focus-visible:outline-black select-none cursor-pointer',
        disabled && 'pointer-events-none opacity-50',
      )}
      onKeyDown={(e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          if (onChange) onChange(!checked);
        }
      }}
      onClick={(e) => {
        e.preventDefault();
        if (onChange) onChange(!checked);
        e.stopPropagation();
      }}
    >
      <CheckBoxIcon checked={checked} />
      <span className={styles.span} />
      <input
        id={title}
        className="pointer-events-none"
        type="checkbox"
        hidden
        checked={checked}
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.checked);
        }}
      />
    </div>
    <label className="text-sm font-bold text-alt-color-4" htmlFor={title}>{title}</label>
  </div>
);
