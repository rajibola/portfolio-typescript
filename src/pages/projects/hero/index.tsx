import { nasa, web } from "assets/images";
import gsap, { Power3 } from "gsap";
import { useRef, useState } from "react";

export const Hero = () => {
  const tl = gsap.timeline({ delay: 0 });
  const [count, setcount] = useState(1);
  const [currentValue, setcurrentValue] = useState(0);

  const imagelist = useRef<HTMLDivElement>(null);

  const onPressNext = () => {
    tl.to(imagelist.current, {
      duration: 1,
      x: `${currentValue - 100}vw`,
      ease: Power3.easeOut,
      onComplete: () => {
        setcount(count + 1);
        setcurrentValue(currentValue - 100);
      },
    });
  };

  const onPressPrev = () => {
    tl.to(imagelist.current, {
      duration: 1,
      x: `${currentValue + 100}vw`,
      ease: Power3.easeOut,
      onComplete: () => {
        setcount(count - 1);
        setcurrentValue(currentValue + 100);
      },
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div ref={imagelist} className="flex relative items-center h-screen">
        {[web, web, web, web].map((image, i) => (
          <img
            src={image}
            key={i + image}
            alt={image}
            className="w-full h-full bg-cover"
          />
        ))}
      </div>

      <div
        className=" w-10 h-10 bg-slate-500 absolute z-10 top-0"
        onClick={onPressPrev}
      />
      <div
        className=" w-10 h-10 bg-slate-500 absolute z-10 right-0 top-0"
        onClick={onPressNext}
      >
        next
      </div>
    </div>
  );
};
