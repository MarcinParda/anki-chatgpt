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
        className="mt-1 border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
        {...inputParams}
      />
    </label>
  );
};
