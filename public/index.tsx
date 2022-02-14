import { gsap, Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import logo from "../../web.png";
import Hero from "./hero";

function Home() {
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

  return <Hero />;
}

export default Home;
