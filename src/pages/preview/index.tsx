import { useParams } from "react-router-dom";
import { getNextProject, getProject } from "utils/PROJECTS";
import { Hero } from "./hero";
import { Info } from "./info";
import { LargeImage } from "./large-image";
import { NextProject } from "./next-project";
import { Showcase } from "./showcase";

export const Preview = () => {
  let params = useParams();
  let project = getProject(params?.id!);
  let nextProject = getNextProject(params?.id!);
  console.log(params?.id);
  return (
    <div>
      <Hero title={project?.title} name={project?.name} />
      <Info image={project?.images[2]} />
      <LargeImage
        image={project?.images[3] ? project?.images[3] : project?.images[1]}
      />
      <Showcase images={project?.images} tag={project?.tag} />
      <NextProject project={nextProject} />
    </div>
  );
};
