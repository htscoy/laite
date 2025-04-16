import type { ComponentProps } from "react";

interface SelectProps extends ComponentProps<"select"> {
  label: string;
  options: Array<ComponentProps<"option">>;
}

export function Select({ label, options, ...props }: SelectProps) {
  return (
    <div className="py-2 flex flex-col">
      <label>{label}</label>
      <select
        {...props}
        className="border rounded-sm py-2 px-2 pr-4"
        style={{ appearance: "base-select" }}
      >
        <option>- Select -</option>
        {options.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  );
}
