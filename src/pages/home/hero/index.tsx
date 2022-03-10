import { Expo, gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Header } from "shared/header";
import { Iphone } from "pages";

const Hero = () => {
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

    let tl = gsap.timeline();
    tl.to([firstText, secondText, thirdText], {
      delay: 1,
      top: "-100%",
      duration: 0.8,
      ease: Expo.easeOut,
      stagger: {
        amount: 0.3,
      },
    })
      .from(
        [firstName, secondName],
        {
          paddingTop: "135px",
          duration: 0.3,
          opacity: 0,
          ease: Expo.easeOut,
          stagger: {
            amount: 0.2,
          },
        },
        "-=0.5"
      )
      .from(
        [myFirstText, mySecondText, myThirdText],
        {
          paddingLeft: "25px",
          duration: 0.2,
          opacity: 0,
          ease: Expo.easeOut,
          stagger: {
            amount: 0.3,
          },
        },
        "-=0.1"
      );
  }, []);

  return (
    <div className="w-screen overflow-hidden relative h-screen flex bg-black px-[10%] justify-end">
      <div ref={cover}>
        <div className="absolute w-full h-full bg-[#000] z-40 top-0" />
        <div className="absolute w-full h-full bg-[#000] z-40 left-[33.3%] top-0" />
        <div className="absolute w-full h-full bg-[#000] z-40 left-[66.6%] top-0" />
      </div>

      <div className="absolute top-0 right-0 left-0 self-center">
        <Iphone />
      </div>

      <div
        ref={myText}
        className="w-[50%] max-w-[400px] right-0 font-graphik z-10 text-white self-center"
      >
        <div className=" font-extralight text-6xl leading-[1] mb-4">
          Frontend developer.
        </div>
        <div className=" font-sourceSansPro font-light text-16 mb-[22px]">
          Hi, I'm Ridwan Ajibola. A react and react-native developer focused on
          building responsive cross-platform mobile applications that look the
          same across various devices and have buttery-smooth user experience.
        </div>

        <Link to="/projects" className="pb-1 text-lg">
          See My Works
        </Link>
      </div>
      <div ref={ridwan} className="w-min h-min absolute left-14 bottom-[120px]">
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
