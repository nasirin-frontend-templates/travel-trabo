import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

interface tButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "s" | "m" | "l" | "xl";
  variant?: "contained" | "outlined";
}

export default function Button({
  children,
  size = "m",
  variant = "contained",
  ...props
}: tButton) {
  const sizes = {
    "py-2 px-6": size == "m",
    "py-2 px-4 text-sm": size == "s",
    "py-3 px-8 text-lg": size == "l",
    "py-3 px-8 text-xl": size == "xl",
  };

  const variants = {
    "bg-blue-500 text-white hover:bg-blue-700 rounded-lg":
      variant == "contained",
    "bg-none text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-lg font-semibold":
      variant == "outlined",
  };

  return (
    <button {...props} className={cn(sizes, variants)}>
      {children}
    </button>
  );
}
