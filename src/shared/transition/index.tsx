import { Power2 } from "gsap";
import { useEffect, useRef } from "react";

export const Transition = ({ timeline }: { timeline: any }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 4,
      x: 2500,
      ease: Power2.easeOut,
    });
  });
  return (
    <div className="">
      <div
        className="absolute top-0 w-full h-screen z-[999999999] bg-green-600"
        ref={trans}
      ></div>
    </div>
  );
};
