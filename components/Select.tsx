import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SelectProps {
  options: { label: string; value: string }[];
  label?: string;
  loading?: boolean;
}

export const Select = ({ label, options, loading }: SelectProps) => {
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
      <select
        className="form-select w-full appearance-none rounded-lg border border-form-stroke bg-white bg-no-repeat py-3 px-5 text-body-color transition ease-in-out focus:border-primary focus:outline-none active:border-primary"
        aria-label="Default select example"
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value} selected>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
