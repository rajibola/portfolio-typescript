import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigations } from "./routers";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );
}

export default App;
