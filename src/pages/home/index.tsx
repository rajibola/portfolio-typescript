import { gsap, Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import logo from "../../web.png";
import Hero from "./hero";

function Home() {
  let logoRef = useRef<HTMLDivElement>(null);
  let header = useRef<HTMLDivElement>(null);

  return <Hero />;
}

export default Home;
