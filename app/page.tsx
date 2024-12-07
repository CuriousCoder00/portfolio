"use client";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <div className="min-h-dvh md:max-w-[700px] mx-auto w-full flex flex-col items-center justify-start overflow-hidden rounded-md pt-24 px-4">
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <div className="fixed inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
