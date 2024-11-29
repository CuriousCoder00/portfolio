"use client";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Button
          variant={"outline"}
          className="border rounded-lg hover:bg-slate-500/30"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className="border rounded-lg hover:bg-slate-500/30"
          onClick={() => setTheme("dark")}
        >
          <MoonStar />
        </Button>
      )}
    </>
  );
};
