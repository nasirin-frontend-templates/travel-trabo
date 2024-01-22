"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import cn from "classnames";

interface tNavButton extends LinkProps {
  name: ReactNode;
  isHome?: boolean;
  pathnames?: string[];
  active?: boolean;
}

export default function NavButton({ name, active, ...props }: tNavButton) {
  const pathname = usePathname();

  return (
    <li className={cn("flex flex-col items-center")}>
      <Link
        {...props}
        className={cn(active ? "text-purple-950 font-medium" : "font-light")}
      >
        {name}
      </Link>
      <div className={cn(active && "border border-purple-950 w-[10px]")} />
    </li>
  );
}
