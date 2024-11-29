import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-dvh relative w-full flex flex-col items-center justify-start overflow-hidden rounded-md pt-24 px-4">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}
