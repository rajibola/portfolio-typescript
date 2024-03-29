import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    image?: string;
    margin?: boolean;
    title: string;
    name: string;
    tools: string[];
    images?: string[] | string;
  };
}

export const ProjectCard = forwardRef<HTMLDivElement, Props>(
  ({ data, ...props }, ref) => {
    const { image, margin, title, name, tools, images } = data;
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
          y: margin ? "-200" : "-50",

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
    }, [margin]);

    return (
      <div
        ref={parallax}
        className={`md:px-[5%] px-0 w-full md:w-1/2 ${
          margin && "mt-60"
        } relative`}
      >
        <Link to={`/projects/${name.split(" ").join("-").toLowerCase()}`}>
          <div
            ref={imageCover}
            className="h-[80vh] max-w-[500px] w-full relative flex items-center overflow-hidden  p-0 m-0"
          >
            <div ref={ref} className="w-full h-full relative">
              <img
                ref={bgImage}
                src={images?.[0]}
                alt={image}
                className="min-w-full min-h-full h-[120%] w-[120%] bg-cover bg-center object-cover -mt-[25%] opacity-95"
              />
            </div>
          </div>
        </Link>
        <div ref={textCover}>
          <div className="flex w-full pt-[60px]">
            <p className="uppercase text-11 tracking-2 opacity-70 pr-5">
              {name}
            </p>
            <div className="h-[1px] w-[35%] bg-white/30 mt-[5px]" />
          </div>
          <h1 className="my-[30px] text-22 max-w-[300px] leading-[1.6] font-light">
            {title}
          </h1>
          <div className="opacity-60 max-w-[300px] md:-mt-[10px] -mt-5  text-14 mb-4 pr-5">
            {tools.map((item, i) => (
              <span className="-mt-5 leading-[1.8] mr-[5px]" key={i}>
                {item}.
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
