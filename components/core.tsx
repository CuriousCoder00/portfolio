import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Core = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-dvh relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
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
      <div className="flex flex-col items-center md:max-w-[700px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default Core;
