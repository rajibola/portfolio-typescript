import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { BlobCursor } from "shared/blob-cursor";

export const NextProject: FC<{ project: any }> = ({ project }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [active, setActive] = useState(false);
  const parent = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const nextImge = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    gsap.to(nextImge.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: next.current,
        scrub: 0.3,
      },
    });

    return () => {
      gsap.killTweensOf(nextImge.current);
    };
  }, []);

  return (
    <div
      ref={parent}
      className="overflow-hidden cursor-pointer"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <section ref={next} className="h-[110vh] overflow-hidden relative">
        <img
          src={project.images[0]}
          ref={nextImge}
          className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
          alt="hero"
        />
        <BlobCursor ref={parent} />
      </section>
    </div>
  );
};
