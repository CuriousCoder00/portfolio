import { Logo } from "@/assets";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./theme-toggler";
import { socialData } from "@/data/socials";

const Header = () => {
  return (
    <header className="fixed top-3 z-50 w-full md:max-w-[700px] mx-auto px-2">
      <nav className="flex items-center justify-between p-2 rounded-xl px-4 shadow-inner shadow-zinc-500 border-b backdrop-blur-xl">
        <Link href={"/"}>
            <Logo />
        </Link>
        <div className="flex items-center justify-end gap-3">
          {socialData.map((social) => (
            <Link
              className="scale-95 hover:scale-105 transition-transform duration-200"
              href={social.link}
              key={social.name}
            >
              {social.icon}
            </Link>
          ))}
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Header;
