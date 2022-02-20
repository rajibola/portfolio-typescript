import { Header } from "shared/header";
import { SmoothScroll } from "shared/smooth-scroll";
import { Details } from "./details";
import { Hero } from "./hero";

export const Projects = () => {
  return (
    <SmoothScroll className="w-screen">
      <Header show />
      <Hero />
      <Details />
    </SmoothScroll>
  );
};
