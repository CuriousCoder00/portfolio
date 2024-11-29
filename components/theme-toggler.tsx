"use client";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border rounded-lg hover:bg-slate-500/30">
      {theme === "dark" ? (
        <SunIcon
          className="w-6 h-6 cursor-pointer p-1"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonStar
          className="w-6 h-6 cursor-pointer p-1"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};
