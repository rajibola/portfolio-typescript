import { ProjectCard } from "shared/project-card";

export const Gallery = () => {
  return (
    <div className="px-[10vw] w-full max-w-[1280px] mx-auto font-graphik">
      <div className="flex">
        <ProjectCard />
        <ProjectCard margin />
      </div>
    </div>
  );
};
