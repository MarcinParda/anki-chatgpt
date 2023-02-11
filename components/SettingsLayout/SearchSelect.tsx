import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Select from 'react-select';

interface SelectProps {
  options: { label: string; value: string }[];
  label: string;
  loading: boolean;
}

const SearchSelect = ({ label, options, loading }: SelectProps) => {
  return (
    <label>
      <span className="flex items-center">
        {label}
        {loading && (
          <AiOutlineLoading3Quarters
            size={17}
            className="ml-2 mb-1 animate-spin"
          />
        )}
      </span>
      <Select options={options} />
    </label>
  );
};

export default SearchSelect;
