import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({ label, ...inputParams }: InputProps) => {
  return (
    <label className="mb-3 block text-base font-medium text-black">
      <span>{label}</span>
      <input
        className="mt-1 border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
        {...inputParams}
      />
    </label>
  );
};
