import type { ComponentProps } from "react";

export function SubmitButton({
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
