import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const textContainer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const textRef = textContainer.current;
  const containerRef = container.current;

  useLayoutEffect(() => {
    gsap.timeline().to(textRef, {
      y: "-10%",
      ease: "none",
      scrollTrigger: {
        id: "about-text",
        trigger: containerRef,
        start: "top bottom",
        scrub: 1,
      },
    });

    return () => {
      gsap.killTweensOf(textRef);
      gsap.killTweensOf(containerRef);
    };
  }, []);
  return (
    <section
      ref={container}
      className="text-black w-screen min-h-screen relative h-[120vh] overflow-hidden"
    >
      <div
        ref={textContainer}
        className="bg-white/90 h-[150%] w-screen absolute top-[10%]"
      >
        <div className="max-w-[850px] lg:px-0 w-screen mx-auto font-graphik flex items-center h-screen px-[10%]">
          <div className=" font-sourceSansPro text-22">
            <div className="my-[2.3em] overflow-hidden h-[12px]">
              <h1 className="text-[11px] tracking-[2px] uppercase font-normal">
                /{" "}
                <Link to="/projects" className="opacity-50">
                  Resume
                </Link>{" "}
                — About
              </h1>
            </div>
            <p className="text-[40px] lg:text-80 font-graphik font-extralight">
              Hello! I'm Ridwan
            </p>
            <p className="mt-3 lg:mt-0 lg:text-20 text-16 font-graphik mb-4 lg:leading-[36px] leading-6">
              A frontend developer based in Nigeria. I have over 3 years of
              experience, learning, exploring, teaching and working with teams
              to build applications and solutions that span across several
              sectors for businesses and enterprise.
            </p>
            {/* <p className="text-20 font-graphik mb-2 leading-[36px]">
              I am dynamic in my operations and I'm always yearning to make an
              impact with every line of code. Here are a few technologies I've
              been working with recently:
            </p> */}

            <div className="mt-6 flex flex-col flex-nowrap lg:flex-wrap h-[150px] w-max gap-x-8">
              <List number={1} name="react" />
              <List number={2} name="react native" />
              <List number={3} name="Javascript (ES6+)" />
              <List number={4} name="typecript" />
              <List number={5} name="html & (S)css" />
              <List number={6} name="react/redux" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const List: FC<{ number: number; name: string }> = ({
  number,
  name,
}) => {
  return (
    <h1 className="text-[14px] tracking-[2px] uppercase font-normal mb-3 w-fit">
      /{" "}
      <Link to="/projects" className="opacity-50">
        0{number}
      </Link>{" "}
      — {name}
    </h1>
  );
};
