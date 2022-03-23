import gsap from "gsap";
import { FC, useLayoutEffect, useRef } from "react";

export const LargeImage: FC<{ image?: string }> = ({ image }) => {
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
        src={image}
        ref={heroImage}
        className="block h-[125%] width-[100%] absolute -top-[35%] will-change-transform object-cover"
        alt="hero"
      />
    </section>
  );
};
