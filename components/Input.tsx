import { log } from 'console';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn<string>;
}

export const Input = ({ label, register, ...inputParams }: InputProps) => {
  return (
    <label className="block text-base font-medium text-black">
      {label && <span className="mb-1 block">{label}</span>}
      <input
        className="w-full rounded-lg border border-form-stroke py-3 px-5 font-medium text-body-color placeholder-slate-400 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
        name="question"
        {...inputParams}
        {...register}
      />
    </label>
  );
};
