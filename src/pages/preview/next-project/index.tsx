import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BlobCursor } from "shared/blob-cursor";
import PROJECTS from "utils/PROJECTS";

export const NextProject: FC<{ project: typeof PROJECTS[0] }> = ({
  project,
}) => {
  let navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);
  const [active, setActive] = useState(false);
  const parent = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const nextImge = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const nextCurrent = nextImge.current;
    gsap.to(nextCurrent, {
      yPercent: 70,
      ease: "none",
      scrollTrigger: {
        trigger: next.current,
        scrub: 0.3,
      },
    });

    return () => {
      gsap.killTweensOf(nextCurrent);
    };
  }, []);

  return (
    <div
      ref={parent}
      className="overflow-hidden cursor-pointer block bg-black"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onClick={() =>
        window.open(
          `/projects/${project.name.split(" ").join("-").toLowerCase()}`,
          "_self"
        )
      }
    >
      <section ref={next} className="h-[100vh] overflow-hidden relative">
        <img
          src={project.images[0]}
          ref={nextImge}
          className="block h-[125%] width-[100%] absolute -top-[70%] will-change-transform object-cover opacity-90"
          alt="hero"
        />
        <BlobCursor ref={parent} />
      </section>
    </div>
  );
};
