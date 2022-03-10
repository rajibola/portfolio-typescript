import React from "react";
import { Header } from "shared/header";
import { Footer } from "shared/footer";
import SmoothScroll from "shared/smooth-scroll";
import Hero from "./hero";

export const Home = () => {
  return (
    <SmoothScroll>
      <Header show />
      <Hero />
      <Footer />
    </SmoothScroll>
  );
};
