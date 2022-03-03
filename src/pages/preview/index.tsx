import ScrollContainer from "shared/scroll-container";
import SmoothScroll from "shared/smooth-scroll";
import { Hero } from "./hero";
import { Info } from "./info";
import { Showcase } from "./showcase";

export const Preview = () => {
  return (
    <>
      <Hero />
      <Info />
      <Showcase />
    </>
  );
};
