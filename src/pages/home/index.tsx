import React, { useEffect } from "react";
import { Header } from "shared/header";
import { Footer } from "shared/footer";
import Hero from "./hero";
import { About } from "./about";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header show />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};
