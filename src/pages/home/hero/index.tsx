import { Expo } from "gsap";
import { Iphone } from "models";
import React, { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const Hero: FC<{ timeline?: any }> = ({ timeline }) => {
  let myText = useRef<HTMLDivElement>(null);
  let ridwan = useRef<HTMLDivElement>(null);
  let cover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let firstText = cover.current?.firstChild!;
    let secondText = firstText.nextSibling!;
    let thirdText = secondText.nextSibling!;

    let firstName = ridwan.current?.firstChild!;
    let secondName = firstName?.nextSibling!;

    let myFirstText = myText.current?.firstChild!;
    let mySecondText = myFirstText.nextSibling!;
    let myThirdText = mySecondText.nextSibling!;

    console.log(firstName);

    timeline
      .to([firstText, secondText, thirdText], {
        // delay: 1,
        top: "-100%",
        duration: 0.8,
        ease: Expo.easeOut,
        stagger: {
          amount: 0.3,
        },
      })
      .from([firstName, secondName], {
        paddingTop: "135px",
        duration: 0.4,
        opacity: 0,
        ease: Expo.easeOut,
        stagger: {
          amount: 0.2,
        },
      })
      .from(
        [myFirstText, mySecondText, myThirdText],
        {
          x: 25,
          duration: 0.4,
          opacity: 0,
          ease: Expo.easeOut,
          stagger: {
            amount: 0.3,
          },
        },
        "-=0.1"
      );
  }, [timeline]);

  return (
    <div className="w-screen overflow-hidden relative h-screen flex bg-black px-[10%] justify-end">
      <div ref={cover}>
        <div className="absolute w-full h-full bg-[#000] z-40 top-0" />
        <div className="absolute w-full h-full bg-[#000] z-40 left-[33.3%] top-0" />
        <div className="absolute w-full h-full bg-[#000] z-40 left-[66.6%] top-0" />
      </div>

      <div className="hidden md:block absolute top-0 right-[10%] left-0 self-center">
        <Iphone />
      </div>

      <div
        ref={myText}
        className="w-[100%] md:w-[50%] max-w-[400px] right-0 font-graphik z-10 text-white self-center"
      >
        <div className="font-extralight md:text-6xl text-3xl leading-[1] mb-4">
          Frontend developer.
        </div>
        <div className="font-sourceSansPro font-normal text-16 mb-[22px] text-white/60">
          Hi, I'm Ridwan Ajibola. A frontend developer that focuses on building
          responsive cross-platform mobile applications and websites that makes
          user Experience realistic.
        </div>

        <Link to="/projects" className="pb-1 text-lg">
          See my works
        </Link>
      </div>
      <div
        ref={ridwan}
        className="w-min h-min absolute left-14 bottom-[120px] hidden md:block"
      >
        <LargeText>RID</LargeText>
        <LargeText>WAN</LargeText>
      </div>
    </div>
  );
};

export default Hero;

const LargeText = styled.h1`
  ${tw`text-[152px] font-bold font-robotoCondensed h-[135px] overflow-hidden`}
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: #ffffff;
  -webkit-text-fill-color: transparent;
  line-height: 135px;
`;
