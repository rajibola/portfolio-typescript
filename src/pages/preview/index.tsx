import { useParams } from "react-router-dom";
import { getNextProject, getProject } from "utils/PROJECTS";
import { Hero } from "./hero";
import { Info } from "./info";
import { LargeImage } from "./large-image";
import { NextProject } from "./next-project";
import { Showcase } from "./showcase";
import { Header } from "shared";
import gsap from "gsap";

export const Preview = () => {
  const preview = gsap.timeline();
  let params = useParams();
  let project = getProject(params?.id!);
  let nextProject = getNextProject(params?.id!);

  return (
    <div>
      <Header timeline={preview} show />
      <Hero title={project?.title} name={project?.name} />
      <Info timeline={preview} image={project?.images[2]} />
      <LargeImage
        image={project?.images[3] ? project?.images[3] : project?.images[1]}
      />
      <Showcase images={project?.images} tag={project?.tag} />
      <NextProject project={nextProject} />
    </div>
  );
};
