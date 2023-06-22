import { useEffect } from "react";
import { Header } from "shared/header";
import { Footer } from "shared/footer";
import Hero from "./hero";
import { About } from "./about";
import gsap from "gsap";

export const Home = () => {
  const home = gsap.timeline();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header timeline={home} show />
      <Hero timeline={home} />
      <About />
      <Footer />
    </div>
  );
};
