import { Footer } from "shared/footer";
import { Hero } from "./hero";
import { Info } from "./info";
import { LargeImage } from "./large-image";
import { NextProject } from "./next-project";
import { Showcase } from "./showcase";

export const Preview = () => {
  return (
    <div>
      <Hero />
      <Info />
      <LargeImage />
      <Showcase />
      <NextProject />
      {/* <Footer /> */}
    </div>
  );
};
