import { UseFormRegisterReturn } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SelectProps {
  options: { label: string; value: string }[];
  label?: string;
  loading?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const Select = ({ label, options, loading, register }: SelectProps) => {
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
        aria-label="Select deck"
        defaultValue={options.at(0)?.value}
        name="deckName"
        {...register}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
