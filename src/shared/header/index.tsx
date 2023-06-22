import { Bounce, Power2 } from "gsap";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Header: FC<{ show: boolean; timeline?: any }> = ({
  show,
  timeline,
}) => {
  let header = useRef(null);
  let letterI = useRef<HTMLDivElement>(null);
  let menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dot = letterI.current?.firstChild!;
    timeline.from(dot, {
      delay: 1,
      top: "-70px",
      duration: 1,
      ease: Bounce.easeOut,
    });
  }, [timeline]);

  const handleMenu = () => {
    timeline.to(menu.current, {
      duration: 0.5,
      ease: Power2.easeInOut,
      marginLeft: "0",
    });
  };

  const handleCloseMenu = () => {
    timeline.to(menu.current, {
      duration: 0.5,
      ease: Power2.easeInOut,
      marginLeft: "100vw",
    });
  };

  return (
    <header
      ref={header}
      className=" mix-blend-exclusion flex justify-between items-center h-[58px] my-4 md:my-[45px] px-10 md:px-[150px] w-screen z-30 fixed"
    >
      <Link to="/">
        <div className="md:w-[515px] md:text-4xl text-2xl items-baseline font-graphik font-extralight ">
          <div className="flex items-center ">
            r
            <div
              ref={letterI}
              className="flex flex-col items-center justify-end relative -mb-1 px-[3px]"
            >
              <div className="md:h-[5.5px] h-1 w-1 md:w-[5.5px] rounded-xl bg-white absolute -top-2" />
              <div className="w-[1px] md:h-[20px] h-[11px] text-4xl bg-white" />
            </div>
            dwan
          </div>
          <p className="font-sourceSansPro leading-[0.5] tracking-tight font-normal md:text-sm text-xs">
            ui developer
          </p>
        </div>
      </Link>
      <div className="hidden md:flex md:w-[515px] justify-end md:mr-[52px] text-sm gap-8 font-sourceSansPro lg:self-start mt-3">
        <Link to="/projects">
          <h1 className="uppercase text-11 font-graphik tracking-2 mix-blend-difference">
            works
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="uppercase text-11 font-graphik tracking-2">contact</h1>
        </Link>
      </div>
      <div onClick={handleMenu} className="grid gap-[6px] md:hidden">
        <div className="w-8 h-[2px] bg-white rounded" />
        <div className="w-6 h-[2px] bg-white rounded" />
      </div>
      <div
        ref={menu}
        className="w-screen h-[100%] bg-slate-100 fixed z-50 left-0 bottom-0 ml-[100vw] flex flex-col items-center justify-center gap-10"
      >
        <Link to="/projects">
          <h1 className="uppercase text-black text-[2rem] font-graphik tracking-2">
            works
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="uppercase text-black text-[2rem] font-graphik tracking-2">
            contact
          </h1>
        </Link>
        <div
          onClick={handleCloseMenu}
          className="absolute top-8 right-5 w-8 h-8"
        >
          <div className="w rotate-45 w-8 h-[1px] bg-black origin-center absolute top-[50%]" />
          <div className="w -rotate-45 w-8 h-[1px] bg-black origin-center absolute  top-[50%]" />
        </div>
      </div>
    </header>
  );
};
