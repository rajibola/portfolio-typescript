import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Showcase = () => {
  const screenRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    gsap.utils.toArray(screenRef.current).forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 100,
        // markers: true,
      });
    });
  }, []);

  const addToRef = (el: any) =>
    el && !screenRef.current.includes(el) && screenRef.current.push(el);

  return (
    <section className="relative">
      <div
        ref={addToRef}
        className="w-full h-screen sticky flex items-center justify-center bg-red-500"
      >
        <h1 className="text-22">HHEHEHEH</h1>
      </div>
      <div
        ref={addToRef}
        className="w-full h-screen sticky flex items-center justify-center bg-lime-500"
      >
        <h1 className="text-22">HHEHEHEH</h1>
      </div>
      <div
        ref={addToRef}
        className="w-full h-screen sticky flex items-center justify-center bg-sky-500"
      >
        <h1 className="text-22">Next Project Screen</h1>
      </div>

      {/* <div className="relative bottom-0 mt-[100vh]" /> */}
    </section>
  );
};
