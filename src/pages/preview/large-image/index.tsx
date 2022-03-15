import { portfolio, project2, web } from "assets/images";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export const LargeImage = () => {
  const hero = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    gsap.to(heroImage.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: hero.current,
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <section ref={hero} className="h-[110vh] overflow-hidden relative">
      <img
        src={project2}
        ref={heroImage}
        className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
      />
    </section>
  );
};
