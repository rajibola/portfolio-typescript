import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  onPressNextImage,
  onPressPrevImage,
  textEffect,
} from "utils/animations";
import { IMAGES } from "utils/helpers";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const tl = gsap.timeline();

  const [count, setcount] = useState(1);
  const [currentValue, setcurrentValue] = useState(0);

  const imagelist = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const mainText = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    textEffect(mainText);
  }, [count]);

  useLayoutEffect(() => {
    tl.from(line.current, {
      duration: 0.4,
      width: 0,
      ease: Power3.easeInOut,
    });

    gsap.to(mainText.current, {
      duration: 1,
      y: "200px",
      ease: "none",
      scrollTrigger: {
        id: "section-A",
        trigger: line.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
        // markers: true,
        scrub: true,
      },
    });

    return () => ScrollTrigger.create({}).kill();
  }, []);

  const onPressNext = () => {
    if (count === IMAGES.length) return;
    onPressNextImage(
      imagelist,
      count,
      mainText,
      currentValue,
      setcurrentValue,
      setcount
    );
  };

  const onPressPrev = () => {
    if (count === 1) return;
    onPressPrevImage(
      imagelist,
      count,
      mainText,
      currentValue,
      setcurrentValue,
      setcount
    );
  };

  return (
    <section
      ref={container}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div ref={imagelist} className="relative inline-flex">
        {IMAGES.map(({ image }, i) => (
          <div className="w-screen overflow-hidden h-screen">
            <div
              key={i + image}
              className="w-full h-full bg-cover object-cover"
              style={{
                backgroundImage: `url(${image})`,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "multiply",
              }}
            />
          </div>
        ))}
      </div>

      <div
        ref={overlay}
        className="bottom-0 absolute z-20 right-0 top-0 left-0 flex flex-col justify-between mx-32 ml-64 pt-32 pb-10 text-white overflow-hidden"
      >
        <div
          ref={mainText}
          className="font-extralight text-7xl font-graphik leading-tight w-3/4 mt-10 overflow-hidden"
        >
          {IMAGES[count - 1].text.map((item, i) => (
            <div className="opacity-0" key={item + i}>
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="font-graphik text-3xl font-thin">
            {count}
            <span className="text-2xl font-normal">/{IMAGES.length}</span>
          </div>

          <div className="flex items-center self-end">
            <div
              className="z-10 top-0 uppercase text-sm p-[30px]"
              onClick={onPressPrev}
            >
              prev
            </div>
            <div className=" h-[1px] w-28">
              <div ref={line} className="h-[1px] w-28 bg-white/60" />
            </div>
            <div
              className="z-10 right-0 top-0 uppercase text-sm p-[30px]"
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
