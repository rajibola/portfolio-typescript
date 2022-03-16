import { portfolio } from "assets/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FC, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  image?: string;
  margin?: boolean;
  title: string;
  name: string;
  tools: string[];
  images?: string[];
}

export const ProjectCard: FC<Props> = ({
  image,
  margin,
  title,
  name,
  tools,
  images,
}) => {
  const bgImage = useRef<HTMLImageElement>(null);
  const imageCover = useRef<HTMLDivElement>(null);
  const textCover = useRef<HTMLDivElement>(null);
  const parallax = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap
      .timeline()
      .to([imageCover.current, textCover.current], {
        delay: 1,
        duration: 1,
        y: margin ? "-250" : "-50",

        scrollTrigger: {
          trigger: bgImage.current,
          scrub: 2,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "card-A",
        },
      })
      .to(bgImage.current, {
        duration: 1,
        y: "150",

        scrollTrigger: {
          immediateRender: false,
          trigger: bgImage.current,
          scrub: margin ? 2 : 1,
          start: "top 80%",
          toggleActions: "play none none reverse",
          id: "card-B",
        },
      });

    return () => {
      ScrollTrigger.getById("card-A").kill();
      ScrollTrigger.getById("card-B").kill();
    };
  }, []);

  return (
    <div ref={parallax} className={`px-[5%] w-1/2 ${margin && "mt-60"}`}>
      <div
        ref={imageCover}
        className="h-[80vh]  max-w-[500px] w-full relative flex items-center overflow-hidden  p-0 m-0"
      >
        <div className="w-full h-full relative">
          <img
            ref={bgImage}
            src={images?.[0]}
            alt={image}
            className="min-w-full min-h-full h-[120%] w-[120%] bg-cover bg-center object-cover -mt-[25%]"
          />
        </div>
      </div>
      <div ref={textCover}>
        <div className="flex w-full pt-[60px]">
          <p className="uppercase text-11 tracking-2 opacity-70 pr-5">{name}</p>
          <div className="h-[1px] w-[35%] bg-white/30 mt-[5px]" />
        </div>
        <h1 className="my-[30px] text-22 max-w-[300px] leading-[1.6] font-light">
          {title}
        </h1>
        <div className="opacity-60 max-w-[300px] -mt-[10] text-14 mb-4 pr-5">
          {tools.map((item, i) => (
            <span className="-mt-5 leading-[1.8] mr-[5px]" key={i}>
              {item}.
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
