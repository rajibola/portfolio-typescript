import { Header } from "shared/header";
import { Details } from "./details";
import { Hero } from "./hero";

export const Projects = () => {
  return (
    <div className="w-screen bg-black">
      <Header show />
      <Hero />
      <Details />
    </div>
  );
};
