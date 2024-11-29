import React from "react";
import { projectData } from "@/data/projects";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full my-4 gap-3">
      <h2 className="font-semibold text-sm">RECENT PROJECTS</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 flex-wrap w-full gap-3">
        {projectData.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({
  project,
}: {
  project: {
    name: string;
    desc: string;
    link: string;
    repo: string;
    image: StaticImageData;
    tech: string[];
  };
}) => {
  return (
    <div className="flex flex-col col-span-1 overflow-hidden rounded-xl border w-full backdrop-blur-xl">
      <Image
        src={project.image}
        alt={project.name}
        className="hover:scale-105 transition-transform duration-500 delay-300 w-full aspect-video h-auto"
      />
      <div className="flex flex-col items-start justify-start text-start px-4 gap-2 w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-bold text-base mt-5 text-start">
            {project.name}
          </h3>
          <div className="flex items-center justify-end gap-4">
            <Link href={project.link}>
              <SquareArrowOutUpRight size={18} />
            </Link>
            <Link href={project.repo}>
              <DiGithubBadge size={25} />
            </Link>
          </div>
        </div>
        <p className="opacity-80 text-sm">{project.desc}</p>
        <div className="flex items-center justify-start gap-3 w-full flex-wrap my-3">
          {project.tech.map((technology, idx) => (
            <Badge key={idx}>{technology}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
