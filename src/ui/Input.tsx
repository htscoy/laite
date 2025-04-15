import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ type, label, ...props }: InputProps) {
  return (
    <div className="py-2 flex flex-col">
      <label>{label}</label>
      <input {...props} type={type} className="border rounded-sm py-2 px-1" />
    </div>
  );
}
export function NumberInput(props: InputProps) {
  return <Input {...props} type="number" />;
}

export function TextInput(props: InputProps) {
  return <Input {...props} type="text" />;
}
