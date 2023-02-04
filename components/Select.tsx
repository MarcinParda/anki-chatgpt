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
          className="form-select m-0 block w-full appearance-none rounded-lg border border-form-stroke bg-white bg-no-repeat py-3 px-5 text-base text-body-color transition ease-in-out focus:border-primary focus:outline-none active:border-primary"
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
