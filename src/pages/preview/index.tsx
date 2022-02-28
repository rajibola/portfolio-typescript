import SmoothScroll from "shared/smooth-scroll";
import { Hero } from "./hero";
import { Info } from "./info";

export const Preview = () => {
  return (
    <SmoothScroll>
      <Hero />
      <Info />
    </SmoothScroll>
  );
};
