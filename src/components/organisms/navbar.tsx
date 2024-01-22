import Link from "next/link";
import React from "react";
import { FcAndroidOs } from "react-icons/fc";
import Button from "../atoms/button/button";
import NavButton from "../atoms/button/nav-button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href={"/"} className="flex items-center">
        <i className="text-4xl">
          <FcAndroidOs />
        </i>
        <p className="text-2xl font-bold">Trabo</p>
      </Link>
      <ul className="flex items-center gap-8">
        <NavButton name="Home" href="/" active />
        <NavButton name="About" href="/" />
        <NavButton name="Destinations" href="/" />
        <NavButton name="Tours" href="/" />
        <NavButton name="Blog" href="/" />

        <li>
          <Button>Contact us</Button>
        </li>
      </ul>
    </nav>
  );
}
