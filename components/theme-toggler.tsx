"use client";
import { MoonStarIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useSetRecoilState } from "recoil";
import { themeState } from "@/store/atoms/theme";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const setThemeState = useSetRecoilState(themeState);
  const clickHandler = () => {
    if (theme === "dark") {
      setTheme("light");
      setThemeState("light");
    } else {
      setTheme("dark");
      setThemeState("dark");
    }
  };

  return (
    <>
      {theme === "dark" ? (
        <Button
          variant={"outline"}
          className="border rounded-lg hover:bg-slate-500/30"
          onClick={() => clickHandler()}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          variant={"outline"}
          className="border rounded-lg hover:bg-slate-500/30"
          onClick={() => clickHandler()}
        >
          <MoonStarIcon />
        </Button>
      )}
    </>
  );
};
