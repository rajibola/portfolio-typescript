import { ProjectCard } from "shared/project-card";
import PROJECTS from "utils/PROJECTS";

export const Gallery = () => {
  return (
    <div className="px-[10vw] w-full max-w-[1280px] mx-auto font-graphik -mb-10 h-fit">
      <div className="flex flex-wrap">
        {PROJECTS.map(({ title, name, tools, images }, i) => {
          const hasMargin = (i + 1) % 2 === 0;
          return (
            <ProjectCard
              title={title}
              name={name}
              tools={tools}
              images={images}
              margin={hasMargin}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};
