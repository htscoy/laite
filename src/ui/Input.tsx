import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ type, label, ...props }: InputProps) {
  return (
    <div>
      <input {...props} type={type} />
      <label>{label}</label>
    </div>
  );
}
export function NumberInput(props: InputProps) {
  return <Input {...props} type="number" />;
}

export function TextInput(props: InputProps) {
  return <Input {...props} type="text" />;
}
