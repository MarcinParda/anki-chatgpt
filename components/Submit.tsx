import React from 'react';

interface SubmitProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Submit = ({
  icon,
  label,
  iconPosition = 'right',
}: SubmitProps) => {
  return (
    <button
      type="submit"
      className="bg-primary inline-flex items-center justify-center rounded-md px-4 py-[13px] text-white hover:bg-opacity-90"
    >
      {icon && iconPosition === 'left' ? (
        <span className="mr-3">{icon}</span>
      ) : null}
      {label}
      {icon && iconPosition === 'right' ? (
        <span className="ml-3">{icon}</span>
      ) : null}
    </button>
  );
};