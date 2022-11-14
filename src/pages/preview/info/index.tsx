import { project3 } from "assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Info: FC<{ image?: string }> = ({ image }) => {
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
        className="h-[80vh] max-w-[1140px] w-full relative flex items-center overflow-hidden p-0 m-0"
      >
        <div className="w-[120%] md:w-[120%] h-[120%] relative">
          <img
            ref={bgImage}
            src={image}
            alt={project3}
            className="min-w-full min-h-full bg-cover bg-center object-cover -mt-[30%]"
          />
        </div>
      </div>

      <div className="w-full bg-[#4b4b4b] -mt-[50vh] pt-[50vh]">
        <div className="flex-col md:flex-row flex justify-center items-center md:px-[20vw] px-[10%]  max-w-[1280px] mx-auto pt-[160px] pb-[120px]">
          <div className="text-white w-1/3 font-graphik text-[1.25rem] leading-[1.8] self-start mb-6 md:mb-0">
            <h1>Tools</h1>
          </div>
          <div className="text-white md:w-96 w-auto font-graphik md:text-[1.25rem] text-base leading-[1.8]">
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
