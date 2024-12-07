"use client";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./theme-toggler";
import { socialData } from "@/data/socials";
import IMG from "../assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { contributionsTab, tabs } from "@/store/atoms/contributions";
import { Button } from "./ui/button";
const Header = () => {
  const path = usePathname();
  const tab = useRecoilValue(contributionsTab);
  const setTab = useSetRecoilState(contributionsTab);
  return (
    <header className="fixed top-3 z-50 w-full md:max-w-[700px] mx-auto px-2">
      <nav className="flex items-center justify-between p-2 rounded-t-xl px-4 shadow-inner shadow-zinc-500 border-b backdrop-blur-xl">
        <Link href={"/"}>
          <Image
            className="dark:invert rounded-full"
            src={IMG}
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex items-center justify-end gap-3">
          {path === "/contributions" ? (
            <Link
              prefetch
              href={"/"}
              className="flex items-center justify-center scale-95 gap-2 hover:scale-105 transition-transform duration-200 text-sm"
            >
              <BiArrowBack />
              Go Back
            </Link>
          ) : (
            <Link
              prefetch
              href={"/contributions"}
              className="flex flex-col items-center justify-center scale-95 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-sm">Open Source</span>
              <span className="text-xs text-slate-600">Contributions</span>
            </Link>
          )}
          {socialData.map((social) => (
            <Link
              target="_blank"
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
      {path === "/contributions" && (
        <div className="flex items-center justify-between bg-white dark:bg-black w-full rounded-b-xl overflow-hidden shadow-md pl-3">
          Recent Contributions
          <div className="flex items-center justify-end">
            {tabs.map((t, idx) => (
              <Button
                className={`rounded-none ${
                  tab === t.mode
                    ? ""
                    : "dark:bg-slate-400 dark:hover:bg-slate-200 bg-zinc-600"
                }`}
                key={idx}
                onClick={() => setTab(t.mode)}
              >
                {t.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
