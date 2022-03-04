import React from "react";
import ScrollContainer from "shared/scroll-container";
import SmoothScroll from "shared/smooth-scroll";
import Hero from "./hero";

export const Home = () => {
  return (
    <SmoothScroll>
      <Hero />
    </SmoothScroll>
  );
};
