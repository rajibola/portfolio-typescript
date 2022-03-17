import gsap from "gsap";
import { FC, useLayoutEffect, useRef, useState } from "react";
import { BlobCursor } from "shared/blob-cursor";

export const NextProject: FC<{ project: any }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);
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
  }, []);

  return (
    <div
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      ref={parent}
      className="overflow-hidden"
    >
      <section ref={next} className="h-[110vh] overflow-hidden relative">
        <img
          src={project.images[0]}
          ref={nextImge}
          className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
        />
        <BlobCursor ref={parent} />
      </section>
    </div>
  );
};
