import type { ComponentProps } from "react";

export function SubmitButton({
  type = "submit",
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
}

export function Button({
  type = "button",
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
}
