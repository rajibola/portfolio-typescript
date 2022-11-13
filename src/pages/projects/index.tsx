import { Footer } from "shared/footer";
import { Header } from "shared/header";
import { Gallery } from "./gallery";
import { Hero } from "./hero";

export const Projects = () => {
  return (
    <div className="w-screen bg-black overflow-hidden">
      <Header show />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
};
