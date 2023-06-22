import { Footer } from "shared/footer";
import { Header } from "shared/header";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import gsap from "gsap";

export const Projects = () => {
  const project = gsap.timeline();

  return (
    <div className="w-screen bg-black overflow-hidden">
      <Header timeline={project} show />
      <Hero timeline={project} />
      <Gallery />
      <Footer />
    </div>
  );
};
