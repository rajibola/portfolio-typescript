import { Header } from "shared/header";
import { Hero } from "./hero";
import { Gallery } from "./gallery";
import SmoothScroll from "shared/smooth-scroll";

export const Projects = () => {
  return (
    <SmoothScroll className="w-screen bg-black">
      <Header show />
      <Hero />
      <Gallery />
    </SmoothScroll>
  );
};
