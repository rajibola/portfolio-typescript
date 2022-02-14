import { gsap, Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import logo from "../../../web.png";

function Hero() {
  let logoRef = useRef < HTMLDivElement > null;
  let header = useRef < HTMLDivElement > null;

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

      <header className="flex justify-between items-center h-[58px] border my-[58px] px-[57px] absolute w-screen">
        <div className="w-[515px] font-bold text-4xl">ridwan.</div>
        <div className="w-[515px]">Pages</div>
      </header>

      <div className="w-[425px] h-full top-0 bg-[#F0D0AA] ml-[440px] mb-[142px]" />
      <div className="w-full h-full mt-[165px] absolute ml-[112px] bg-[#FFF2C5] flex items-end -z-10"></div>
      <div className="h-[180px] w-full pl-[532px] self-end">
        <div className="bg-white w-full h-full" />
      </div>
    </div>
  );
}

export default Hero;
