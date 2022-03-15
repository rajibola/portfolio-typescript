import {
  web,
  portfolio,
  nasa,
  project1,
  project2,
  project3,
} from "assets/images";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Showcase = () => {
  const screenRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    // gsap.utils.toArray(screenRef.current).forEach((section: any) => {
    //   ScrollTrigger.create({
    //     id: "showcase",
    //     trigger: section,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: 1,
    //     // markers: true,
    //   });
    // });
    // return () => ScrollTrigger.create({}).kill();
  }, []);

  const addToRef = (el: any) =>
    el && !screenRef.current.includes(el) && screenRef.current.push(el);

  return (
    <section className="relative">
      <div className="min-h-screen flex items-center justify-center bg-[#4b4b4b] flex-col py-28 gap-28">
        <img
          ref={addToRef}
          src={web}
          className="w-[70%] h-[70%] flex items-center justify-center  bg-cover"
        />
        <img
          ref={addToRef}
          src={project2}
          className="w-[70%] h-[70%] flex items-center justify-center  bg-cover"
        />
        <img
          ref={addToRef}
          src={project3}
          className="w-[70%] h-[70%] flex items-center justify-center  bg-cover"
        />
      </div>
    </section>
  );
};
