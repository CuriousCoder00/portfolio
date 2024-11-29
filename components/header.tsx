import { Logo } from "@/assets";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./theme-toggler";

const Header = () => {
  return (
    <header className="fixed top-3 z-50 w-full max-w-[700px]">
      <nav className="flex items-center justify-between p-2 rounded-xl px-4 shadow-inner shadow-zinc-500 border-b">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex items-center justify-end gap-3">
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;
