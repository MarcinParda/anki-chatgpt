import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SubmitProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'submit' | 'button';
}

export const Button = ({
  label,
  icon,
  iconPosition = 'right',
  loading = false,
  type = 'button',
  ...buttonProps
}: SubmitProps) => {
  return (
    <button
      type={type}
      className="inline-flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-[13px] text-white hover:bg-opacity-90 disabled:cursor-not-allowed disabled:bg-gray disabled:text-slate-400"
      {...buttonProps}
    >
      {loading ? (
        <AiOutlineLoading3Quarters size={24} className="animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' ? (
            <span className="mr-3">{icon}</span>
          ) : null}
          <span>{label}</span>
          {icon && iconPosition === 'right' ? (
            <span className="ml-3">{icon}</span>
          ) : null}
        </>
      )}
    </button>
  );
};
