import { Footer } from "shared/footer";
import ScrollContainer from "shared/scroll-container";
import SmoothScroll from "shared/smooth-scroll";
import { Hero } from "./hero";
import { Info } from "./info";
import { Showcase } from "./showcase";

export const Preview = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Showcase />
      <Footer />
    </div>
  );
};
