import { gsap, Power3 } from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "../../../shared/header";
import logo from "../../../web.png";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Hero = () => {
  let background = useRef<HTMLDivElement>(null);
  let dropdown = useRef<HTMLDivElement>(null);
  let myText = useRef<HTMLDivElement>(null);
  let ridwan = useRef<HTMLDivElement>(null);

  console.log(ridwan);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(background.current, {
      delay: 1,
      marginLeft: 0,
      duration: 0.5,
      ease: Power3.easeIn,
    })
      .from(dropdown.current, {
        height: 0,
        duration: 0.5,
        ease: Power3.easeOut,
      })
      .from(myText.current, { duration: 2, opacity: 0 })
      .from(ridwan.current, {
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.5,
        },
      });
  });

  return (
    <div className="w-screen overflow-hidden relative h-screen flex">
      <Header />

      <div
        ref={dropdown}
        className="w-[425px] top-0 bg-[#F0D0AA] left-[420px] bottom-[290px] flex justify-center gap-8 absolute -z-10"
      >
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
      <div
        ref={background}
        className="w-full h-full mt-[165px] absolute ml-[112px] bg-[#FFF2C5] -z-20 flex"
      />
      <div className="w-min h-min absolute left-14 bottom-[120px]">
        <LargeText ref={ridwan}>RID</LargeText>
        <LargeText ref={ridwan}>WAN</LargeText>
      </div>

      <div className="h-[150px] w-full pl-[532px] self-end">
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
  ${tw`text-[152px] font-bold font-robotoCondensed`}
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: transparent;
  line-height: 155px;
`;
