"use client";
import React from "react";
import { skillData } from "@/data/skills";
import { MagicCard } from "./ui/magic-card";

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-3 my-3 mt-7">
      <h2 className="text-sm font-semibold">SKILLS</h2>
      
      <div className="flex items-center justify-start gap-3 flex-wrap">
        {skillData.map((skill, idx) => (
          <SkillCard skill={skill} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const SkillCard = ({
  skill,
}: {
  skill: { name: string; icon: React.ReactNode };
}) => {
  return (
    <MagicCard className="w-20 h-20 flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center h-full w-full transition-all gap-2 duration-200 relative">
        <span className="dark:text-pink-200 text-pink-950">{skill.icon}</span>
        <span className="text-sm font-semibold text-center">{skill.name}</span>
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
          aria-hidden="true"
        ></span>
      </div>
    </MagicCard>
  );
};
