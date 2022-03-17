import { useParams } from "react-router-dom";
import { Footer } from "shared/footer";
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
      <Info />
      <LargeImage image={project?.images[1]} />
      <Showcase />
      <NextProject project={nextProject} />
      {/* <Footer /> */}
    </div>
  );
};
