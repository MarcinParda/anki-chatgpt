interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
}

export const Select = ({ label, options }: SelectProps) => {
  return (
    <label>
      <span>{label}</span>
      <div className="mt-1">
        <select
          className="form-select appearance-none block w-full py-3 px-5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
          aria-label="Default select example"
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value} selected>
              {label}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};
