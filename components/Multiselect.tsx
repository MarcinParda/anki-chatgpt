import React from 'react';
interface MultiselectProps {
  options: { label: string; value: string }[];
  label: string;
}

export const Multiselect = ({ options, label }: MultiselectProps) => {
  return (
    <label className="block w-full text-left">
      <span>{label}</span>
      <select
        className="w-full rounded-lg border border-form-stroke outline-1 outline-primary"
        multiple
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
