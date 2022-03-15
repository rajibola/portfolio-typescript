import { pexel, portfolio, project2, web } from "assets/images";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const NextProject = () => {
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
    <section ref={next} className="h-[110vh] overflow-hidden relative">
      <img
        src={pexel}
        ref={nextImge}
        className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
      />
    </section>
  );
};
