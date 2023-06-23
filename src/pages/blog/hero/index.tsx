import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  onPressNextImage,
  onPressPrevImage,
  textEffect,
} from "utils/animations";
// import { postlist } from "utils/helpers";
import postlist from "../../../posts.json";

const splitText = (text: string) => {
  const words = text.split(" ");
  let result = [];
  let currentPart = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const newPart = currentPart + (currentPart.length > 0 ? " " : "") + word;

    if (newPart.length > 28) {
      result.push(currentPart);
      currentPart = word;
    } else {
      currentPart = newPart;
    }
  }

  if (currentPart.length > 0) {
    result.push(currentPart);
  }

  return result;
};

gsap.registerPlugin(ScrollTrigger);

export const Hero = ({ timeline }: { timeline: gsap.core.Timeline }) => {
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

  useEffect(() => {
    timeline.from(line.current, {
      duration: 0.4,
      width: 0,
      ease: Power3.easeInOut,
    });
    timeline.from(line.current, {
      duration: 1,
      x: 0,
      ease: Power3.easeInOut,
    });

    gsap.timeline().to(mainText.current, {
      duration: 1,
      y: "-200px",
      ease: "none",
      scrollTrigger: {
        id: "section-A",
        trigger: line.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    return () => ScrollTrigger.create({}).kill();
  }, [timeline]);

  const onPressNext = () => {
    if (count === postlist.length) return;
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
        {postlist.map(({ thumbnail }, i) => (
          <div className="w-screen overflow-hidden h-screen">
            <div
              key={i + thumbnail}
              className="w-full h-full bg-cover object-cover"
              style={{
                backgroundImage: `url(${thumbnail})`,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "multiply",
              }}
            />
          </div>
        ))}
      </div>

      <Container ref={overlay}>
        <div
          ref={mainText}
          className=" font-light text-6xl font-graphik leading-tight w-3/4 mt-10"
        >
          {splitText(postlist[count - 1].title).map((item, i) => (
            <div className="opacity-0" key={item + i}>
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="font-graphik text-3xl font-thin">
            {count}
            <span className="text-2xl font-normal">/{postlist.length}</span>
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
      </Container>
    </section>
  );
};

const Container = styled.div`
  ${tw`bottom-0 absolute z-20 right-0 top-0 left-0 flex flex-col justify-end mx-auto pt-32 pb-10 text-white`}
  width: min(100% - 3rem, 140ch);
`;
