import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";

interface tButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "s" | "m" | "l" | "xl";
}

export default function Button({ children, size = "m", ...props }: tButton) {
  const sizes = {
    "py-2 px-6": size == "m",
    "py-2 px-4 text-sm": size == "s",
    "py-3 px-8 text-lg": size == "l",
    "py-3 px-8 text-xl": size == "xl",
  };

  return (
    <button
      {...props}
      className={cn(
        "bg-blue-500 hover:bg-blue-600 text-white rounded-lg",
        sizes
      )}
    >
      {children}
    </button>
  );
}
