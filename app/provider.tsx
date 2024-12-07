"use client";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
}
