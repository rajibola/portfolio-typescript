import { portfolio } from "assets/images";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Info = () => {
  const bgImage = useRef<HTMLImageElement>(null);
  const overlay = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: overlay.current,
          start: "top 60%",
          toggleActions: "play none none none",
          markers: true,
          id: "section-A",
        },
      })
      .to(overlay.current, {
        duration: 1,
        x: "100%",
        ease: Power3.easeOut,
      })
      .to(
        bgImage.current,
        {
          duration: 1.2,
          height: "105%",
          width: "105%",
          ease: Power3.easeOut,
        },
        "<"
      );
  }, []);

  return (
    <section className="text-white w-screen pb-[120px] pt-40">
      <div className=" w-full mx-auto font-graphik flex">
        <div className="w-2/3 h-[80vh] relative overflow-hidden">
          <img
            ref={bgImage}
            src={portfolio}
            className="min-w-full min-h-full h-[130%] w-[130%] bg-cover absolute bg-center object-cover top-1/2 transform -translate-y-1/2"
          />
          <div
            ref={overlay}
            className="absolute w-full h-full bg-black justify-self-end"
          />
        </div>
        <div className=" w-1/3"></div>
      </div>
    </section>
  );
};
