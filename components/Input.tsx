import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, ...inputParams }: InputProps) => {
  return (
    <label className="block text-base font-medium text-black">
      <span>{label}</span>
      <input
        className="mt-1 w-full rounded-lg border border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
        {...inputParams}
      />
    </label>
  );
};
