import gsap, { Bounce } from "gsap";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      className="flex justify-between items-center h-[58px] my-[45px] px-[150px] w-screen z-30 text-white fixed"
    >
      <Link to="/">
        <div className="w-[515px] text-4xl items-baseline font-graphik font-extralight">
          <div className="flex items-center ">
            r
            <div
              ref={letterI}
              className="flex flex-col items-center justify-end relative -mb-1 px-[3px]"
            >
              <div className="h-[5.5px] w-[5.5px] rounded-xl bg-white absolute -top-2" />
              <div className="w-[1px] h-[20px] text-4xl bg-white" />
            </div>
            dwan
          </div>
          <p className="font-sourceSansPro leading-[0.5] tracking-tight font-normal text-sm">
            ui developer
          </p>
        </div>
      </Link>
      <div className="w-[515px] flex justify-end mr-[52px] text-sm gap-8 font-sourceSansPro self-start mt-3">
        <Link to="/projects">
          <h1 className="uppercase text-11 font-graphik tracking-2">works</h1>
        </Link>
        <Link to="/contact">
          <h1 className="uppercase text-11 font-graphik tracking-2">contact</h1>
        </Link>
      </div>
    </header>
  );
};
