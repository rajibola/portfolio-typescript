import gsap, { Bounce } from "gsap";
import { FC, useEffect, useRef } from "react";

export const Header: FC<{ show: boolean }> = ({ show }) => {
  let header = useRef(null);
  let letterI = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dot = letterI.current?.firstChild!;
    gsap.timeline().from(dot, {
      delay: 2,
      top: "-70px",
      duration: 1,
      ease: Bounce.easeOut,
    });
  }, []);

  return (
    <header
      ref={header}
      className="flex justify-between items-center h-[58px] my-[45px] px-[57px] w-screen z-30 text-white fixed"
    >
      <div className="w-[515px] font-bold text-4xl items-baseline">
        <div className="flex items-center ">
          r
          <div
            ref={letterI}
            className="flex flex-col items-center justify-end relative -mb-1 px-[1.5px]"
          >
            <div className="h-[5.5px] w-[5.5px] rounded-xl bg-white absolute -top-2" />
            <div className="w-[5px] h-[20px] text-4xl bg-white" />
          </div>
          dwan
        </div>
        <p className="font-sourceSansPro leading-[0.5] tracking-tight font-normal text-sm">
          ui developer
        </p>
      </div>
      <div className="w-[515px] flex justify-end mr-[52px] text-sm gap-8 font-sourceSansPro self-start mt-3">
        <h1>latest work</h1>
        <h1>blog</h1>
        <h1>schedule call</h1>
      </div>
    </header>
  );
};
