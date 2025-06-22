"use client";

import { projectData } from "@/data/projects";
import { useParams } from "next/navigation";
import React from "react";
import { themeState } from "@/store/atoms/theme";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.projectId;
  const projects = projectData.filter((project) => project.id === projectId);
  const project = projects[0];
  const theme = useRecoilValue(themeState);
  return (
    <div className="flex flex-col items-start justify-start pt-24 w-full">
      <h1 className="font-bold text-2xl my-5">{project.name}</h1>
      {theme === "dark" ? (
        <Image
          src={project.imageDark}
          alt={project.name}
          className="hover:scale-105 transition-transform duration-500 delay-300 w-full aspect-video h-auto"
        />
      ) : (
        <Image
          src={project.imageLight}
          alt={project.name}
          className="hover:scale-105 transition-transform duration-500 delay-300 w-full aspect-video h-auto"
        />
      )}
      <p className="my-4 text-foreground/80">{project.desc}</p>
      <h2 className="text-xl font-bold">Tools and Technologies Used</h2>
      <div className="flex flex-col items-start justify-start gap-3 w-full flex-wrap my-3">
        {project.tech.map((technology, idx) => (
          <span className="uppercase pl-6 text-foreground/80" key={idx}>{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
