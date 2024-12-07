"use client";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <div className="mx-auto w-full flex flex-col items-center justify-start  pt-20">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}
