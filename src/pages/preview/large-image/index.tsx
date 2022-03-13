import { portfolio } from "assets/images";
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
    <section ref={hero} className="h-[130vh] overflow-hidden relative">
      <img
        src={portfolio}
        ref={heroImage}
        className="block h-[125%] absolute -top-[35%] will-change-transform object-fill"
      />
    </section>
  );
};
