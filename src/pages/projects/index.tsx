import { Header } from "shared/header";
import { Hero } from "./hero";
import { Gallery } from "./gallery";
import SmoothScroll from "shared/smooth-scroll";
import { Footer } from "shared/footer";

export const Projects = () => {
  return (
    <div className="w-screen bg-black">
      <Header show />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
};
