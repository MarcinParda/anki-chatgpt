import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
interface MultiselectProps {
  options: { label: string; value: string }[];
  label?: string;
  loading?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const Multiselect = ({
  options,
  label,
  loading,
  register,
}: MultiselectProps) => {
  return (
    <label className="block w-full text-left">
      <span className="flex items-center">
        {label}
        {loading && (
          <AiOutlineLoading3Quarters
            size={17}
            className="ml-2 mb-1 animate-spin"
          />
        )}
      </span>
      <select
        className="w-full rounded-lg border border-form-stroke outline-1 outline-primary"
        multiple
        {...register}
      >
        {options.map(({ label, value }) => (
          <option
            className="px-4 py-2 text-body-color outline-primary"
            key={value}
            value={value}
          >
            <span>{label}</span>
          </option>
        ))}
      </select>
    </label>
  );
};
