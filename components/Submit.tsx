import React from 'react';

interface SubmitProps {
  label: string;
  onSubmit: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Submit = ({
  label,
  onSubmit,
  icon,
  iconPosition = 'right',
}: SubmitProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-primary inline-flex items-center justify-center rounded-md px-4 py-[13px] text-white hover:bg-opacity-90"
      onClick={onSubmit}
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
