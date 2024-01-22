import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import cn from "classnames";
import { IoIosPin } from "react-icons/io";

interface tInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: { start?: ReactNode; end?: ReactNode };
}

export default function Input({ icon, ...props }: tInput) {
  return (
    <div className="relative w-[90%]">
      <input
        {...props}
        className={cn(
          "border-x-0 border-t-0 border-b border-neutral-300 w-full pl-0 pr-5 focus:ring-0"
        )}
      />
      {icon?.end && (
        <i
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 text-red-500"
          )}
        >
          {icon.end}
        </i>
      )}
    </div>
  );
}
