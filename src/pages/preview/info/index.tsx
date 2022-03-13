import { portfolio } from "assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Info = () => {
  const bgImage = useRef<HTMLImageElement>(null);
  const imageCover = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap
      .timeline()
      .to(bgImage.current, {
        duration: 1,

        scrollTrigger: {
          trigger: imageCover.current,
          scrub: true,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "info-B",
        },
      })
      .to(bgImage.current, {
        duration: 1,
        marginTop: "10px",

        scrollTrigger: {
          trigger: bgImage.current,
          scrub: 1,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "info-A",
        },
      });

    return () => ScrollTrigger.create({}).kill();
  }, []);

  return (
    <section className="text-white w-screen pt-40">
      <div
        ref={imageCover}
        className="h-[80vh] max-w-[1140px] w-full relative flex items-center overflow-hidden  p-0 m-0"
      >
        <div className="w-[120%] h-[120%] relative">
          <img
            ref={bgImage}
            src={portfolio}
            alt={portfolio}
            className="min-w-full min-h-full bg-cover bg-center object-cover -mt-[30%]"
          />
        </div>
      </div>

      <div className="w-full bg-white -mt-[50vh] pt-[50vh] ">
        <div className="flex justify-center items-center pl-[20%] px-[20vw] max-w-[1280px] mx-auto pt-[160px] pb-[120px]">
          <div className="text-black w-1/3 font-graphik text-[1.25rem] leading-[1.8] self-start">
            <h1>Tools</h1>
          </div>
          <div className="text-black w-96 font-graphik text-[1.25rem] leading-[1.8]">
            <p>
              We’ve worked incredibly hard to build a talented, industry leading
              team of professionals. With a team of creative, strategist,
              business and development specialists, we consistently strive to be
              at the forefront of new media technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
