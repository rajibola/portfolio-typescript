import { portfolio, web, nasa, pexel } from "assets/images";
import gsap, { Power3 } from "gsap";
import { useEffect, useRef, useState } from "react";

const IMAGES = [web, nasa, nasa, pexel, pexel];

export const Hero = () => {
  const tl = gsap.timeline();
  const [count, setcount] = useState(1);
  const [currentValue, setcurrentValue] = useState(0);

  const imagelist = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const mainText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tl.from(line.current, {
      duration: 0.4,
      width: 0,
      ease: Power3.easeInOut,
    });
  }, []);

  const onPressNext = () => {
    if (count === IMAGES.length) return;
    tl.to(imagelist.current?.children[count - 1]!, {
      duration: 0.9,
      backgroundColor: "black",
      ease: Power3.easeIn,
    })
      .to(
        [mainText.current?.children],
        {
          opacity: 0,
          duration: 0.5,
          x: "-30",
          ease: Power3.easeIn,
          stagger: {
            each: 0.1,
          },
        },
        "<"
      )
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
        backgroundColor: "rgba(0,0,0,0.5)",
        duration: 0,
        onComplete: () => {
          setcount(count + 1);
          setcurrentValue(currentValue - 100);
        },
      })
      .to([mainText.current?.children], {
        x: "30",
        duration: 0.1,
      })
      .to(
        [mainText.current?.children],
        {
          opacity: 1,
          duration: 0.5,
          x: "0",
          ease: Power3.easeOut,
          stagger: {
            each: 0.1,
          },
        },
        "<0.2"
      );
  };

  const onPressPrev = () => {
    if (count === 1) return;
    tl.to(imagelist.current?.children[count - 1]!, {
      duration: 1,
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
        duration: 0,
        boxShadow: "none",
        onComplete: () => {
          setcount(count - 1);
          setcurrentValue(currentValue + 100);
        },
      });
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <div ref={imagelist} className="relative inline-flex">
        {IMAGES.map((image, i) => (
          <div
            className="w-full h-full bg-cover object-cover"
            style={{
              backgroundImage: `url(${image})`,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              backgroundBlendMode: "multiply",
            }}
          />
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
          <div>How to create a carousel</div>
          <div>with GSAP, ReactJS</div>
          <div>and TypeScript</div>
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
