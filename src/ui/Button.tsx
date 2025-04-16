import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export function SubmitButton({ children, ...props }: ComponentProps<"button">) {
  return (
    <Button {...props} type="submit">
      {children}
    </Button>
  );
}

export function Button({
  type = "button",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`py-2 px-4 rounded-md ${variant === "primary" ? "bg-black text-white" : ""} ${props.className}`}
    >
      {children}
    </button>
  );
}
