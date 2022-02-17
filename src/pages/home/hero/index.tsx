import { Expo, gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Header } from "../../../shared/header";

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
            amount: 0.2,
          },
        },
        "-=0.1"
      );
  }, []);

  return (
    <div className="w-screen overflow-hidden relative h-screen flex">
      <div ref={cover}>
        <div className="absolute w-full h-full bg-[#FFF2C5] z-20 top-0" />
        <div className="absolute w-full h-full bg-[#FFF2C5] z-20 left-[33.3%] top-0" />
        <div className="absolute w-full h-full bg-[#FFF2C5] z-20 left-[66.6%] top-0" />
      </div>

      <Header show={true} />

      <div className="w-[425px] top-0 bg-[#F0D0AA] left-[420px] bottom-[290px] flex justify-center gap-8 absolute -z-10">
        <Link to="#">in</Link>
        <Link to="#">fb</Link>
        <Link to="#">gh</Link>

        <div
          ref={myText}
          className="w-[406px] absolute bottom-[80px] -right-[370px] font-sourceSansPro z-10"
        >
          <div className="font-bold text-4xl mb-4">
            react-native/react developer.
          </div>
          <div className=" text-sm mb-[22px] font-sourceSansPro">
            Hi, I'm Ridwan Ajibola. A react and react-native developer focused
            on building responsive cross-platform mobile applications that look
            the same across various devices and have buttery-smooth user
            experience.
          </div>

          <Link to="#" className="pb-1 border-b-4 border-black text-lg">
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full h-full mt-[145px] absolute ml-[112px] bg-[#FFF2C5] -z-20 flex"></div>
      <div ref={ridwan} className="w-min h-min absolute left-14 bottom-[120px]">
        <LargeText>RID</LargeText>
        <LargeText>WAN</LargeText>
      </div>

      <div className="h-[140px] w-full pl-[532px] self-end">
        <div className="bg-white w-full h-full flex items-center justify-center gap-40">
          <Link to="#" className="border-b-2 pb-3 border-black leading-none">
            download cv
          </Link>
          <Link to="#" className="border-b-2 pb-3 border-black leading-none">
            latest work
          </Link>
          <Link to="#" className="border-b-2 pb-3 border-black leading-none">
            case studies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const LargeText = styled.h1`
  ${tw`text-[152px] font-bold font-robotoCondensed h-[135px] overflow-hidden`}
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: transparent;
  line-height: 135px;
`;
