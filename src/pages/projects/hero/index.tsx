import { portfolio, web, nasa, pexel } from "assets/images";
import gsap, { Power3 } from "gsap";
import { useRef, useState } from "react";

const IMAGES = [web, nasa, pexel, pexel];

export const Hero = () => {
  const tl = gsap.timeline();
  const [count, setcount] = useState(1);
  const [currentValue, setcurrentValue] = useState(0);

  const imagelist = useRef<HTMLDivElement>(null);

  const onPressNext = () => {
    if (count === IMAGES.length) return;
    tl.to(imagelist.current?.children[count - 1]!, {
      duration: 1,
      scale: 0.85,
      boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,
      ease: Power3.easeOut,
    })

      .to(
        imagelist.current,
        {
          duration: 1,
          x: `${currentValue - 100}vw`,
          ease: Power3.easeIn,
        },
        "<"
      )
      .to(imagelist.current?.children[count - 1]!, {
        scale: 1,
        duration: 0,
        boxShadow: "",
        onComplete: () => {
          setcount(count + 1);
          setcurrentValue(currentValue - 100);
        },
      });
  };

  const onPressPrev = () => {
    if (count === 1) return;
    tl.to(imagelist.current?.children[count - 1]!, {
      duration: 1,
      scale: 0.85,
      boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,
      ease: Power3.easeOut,
    })
      .to(
        imagelist.current,
        {
          duration: 1,
          x: `${currentValue + 100}vw`,
          ease: Power3.easeIn,
        },
        "<"
      )
      .to(imagelist.current?.children[count - 1]!, {
        scale: 1,
        duration: 0,
        boxShadow: "",
        onComplete: () => {
          setcount(count - 1);
          setcurrentValue(currentValue + 100);
        },
      });
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div
        ref={imagelist}
        className="flex relative items-center h-screen w-screen"
      >
        {IMAGES.map((image, i) => (
          <img
            src={image}
            key={i + image}
            alt={image}
            className="w-full h-full bg-cover object-cover"
          />
        ))}
      </div>

      <div className="bottom-0 absolute z-20 right-0 top-0 left-0 flex flex-col justify-between px-32 pl-64 py-32 bg-gradient-to-r from-[#e6e3d8]/60 to-[#fff]">
        <div className="font-light text-7xl font-[sans-serif] leading-tight w-3/4 mt-10">
          How to create a carousel with GSAP, ReactJS and TypeScript
        </div>

        <div className="flex justify-between">
          <div className="font-sourceSansPro text-3xl">
            {count}
            <span className="text-2xl font-normal">/{IMAGES.length}</span>
          </div>

          <div className="flex items-center self-end">
            <div className="z-10 top-0 uppercase text-sm" onClick={onPressPrev}>
              prev
            </div>
            <div className="h-[1px] w-28 bg-black mx-3" />
            <div
              className="z-10 right-0 top-0 uppercase text-sm"
              onClick={onPressNext}
            >
              next
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
