import { gsap, Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { Header } from "../../../shared/header";
import logo from "../../../web.png";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

function Hero() {
  let logoRef = useRef<HTMLDivElement>(null);
  let header = useRef<HTMLDivElement>(null);

  //   useLayoutEffect(() => {
  //     let image: any = logoRef.current?.firstElementChild;
  //     let overlay: any = logoRef.current?.lastElementChild;

  //     let headlineFirst = header.current?.children[0];
  //     let headlineSecond: ChildNode | undefined | null =
  //       headlineFirst?.nextSibling;
  //     let headlineThird: ChildNode | undefined | null =
  //       headlineSecond?.nextSibling;

  //     let tl = gsap.timeline({ delay: 0.5 });
  //     tl.from(overlay, {
  //       duration: 10,
  //       backgroundColor: "#000000",
  //       ease: Power3.easeOut,
  //       delay: 0.5,
  //     }).from(
  //       image,
  //       {
  //         duration: 2,
  //         scale: 1.15,
  //         ease: Power3.easeOut,
  //         rotate: 1.3,
  //       },
  //       "-=10"
  //     );

  //     tl.from(
  //       [
  //         headlineFirst?.childNodes[0],
  //         headlineSecond?.childNodes[0],
  //         headlineThird?.childNodes[0],
  //       ],
  //       {
  //         duration: 1,
  //         y: 72,
  //         opacity: 0,
  //         ease: Power3.easeOut,
  //         delay: 0,
  //         stagger: {
  //           amount: 0.3,
  //         },
  //       },
  //       1
  //     );
  //   });

  //   const animate = () => {
  //     let tl = gsap.timeline({ delay: 0 });
  //     let headlineFirst = header.current?.children[0];
  //     let headlineSecond: ChildNode | undefined | null =
  //       headlineFirst?.nextSibling;
  //     let headlineThird: ChildNode | undefined | null =
  //       headlineSecond?.nextSibling;
  //     tl.to(
  //       [
  //         headlineThird?.childNodes[0],
  //         headlineSecond?.childNodes[0],
  //         headlineFirst?.childNodes[0],
  //       ],
  //       {
  //         duration: 0.5,
  //         y: 72,
  //         opacity: 0,
  //         ease: Power3.easeOut,
  //         delay: 0,
  //         stagger: {
  //           amount: 0.2,
  //         },
  //       },
  //       0.2
  //     );

  //     // tl.to(
  //     //   logoRef.current,
  //     //   {
  //     //     xPercent: -100,
  //     //     duration: 1.2,
  //     //     ease: Power3.easeOut,
  //     //   },
  //     //   0.28
  //     // );
  //   };

  return (
    <div className="w-screen overflow-hidden relative h-screen flex flex-col">
      {/* <header className="App-header w-screen h-screen flex items-center overflow-hidden">
        <div ref={logoRef} className="overflow-hidden w-screen relative">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="absolute left-0 right-0 bottom-0 top-0 bg-[rgba(0,0,0,0.85)]" />
        </div>

        <div
          ref={header}
          className="absolute text-white ml-36 text-7xl leading-tight font-thin"
        >
          <div className="overflow-hidden">
            <div>front-end react/</div>
          </div>
          <div className="overflow-hidden">
            <div>react native</div>
          </div>
          <div className="overflow-hidden">
            <div>developer.</div>
          </div>

          <div className="text-3xl">Button</div>
        </div>
      </header> */}

      <Header />

      <div className="w-[425px] h-full top-0 bg-[#F0D0AA] ml-[440px] mb-[132px] flex justify-center gap-8 pt-16 relative">
        <Link to="#">in</Link>
        <Link to="#">fb</Link>
        <Link to="#">gh</Link>

        <div className="w-[406px] absolute bottom-[80px] -right-[370px] font-sourceSansPro">
          <h1 className="font-bold text-4xl mb-4">
            react-native & react developer.
          </h1>
          <p className="text-base mb-[22px]">
            Hi, I'm Ridwan Ajibola. A react and react-native developer focused
            on building responsive cross-platform mobile applications that look
            the same across various devices and have buttery-smooth user
            experience.
          </p>

          <Link to="#" className="pb-1 border-b-4 border-black text-lg">
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full h-full mt-[165px] absolute ml-[112px] bg-[#FFF2C5] -z-10 flex"></div>
      <div className="w-min h-min absolute left-14 bottom-[120px]">
        <LargeText>RID</LargeText>
        <LargeText>WAN</LargeText>
      </div>
      <div className="h-[180px] w-full pl-[532px]">
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
}

export default Hero;

const LargeText = styled.h1`
  ${tw`text-[172px] font-bold font-robotoCondensed`}
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: black;
  -webkit-text-fill-color: transparent;
  line-height: 155px;
`;
