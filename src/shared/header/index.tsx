import gsap, { Bounce, Power2 } from "gsap";
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Header: FC<{ show: boolean }> = ({ show }) => {
  let header = useRef(null);
  let letterI = useRef<HTMLDivElement>(null);
  let menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dot = letterI.current?.firstChild!;
    gsap.timeline().from(dot, {
      delay: 2,
      top: "-70px",
      duration: 1,
      ease: Bounce.easeOut,
    });
  }, []);

  const handleMenu = () => {
    gsap.timeline().to(menu.current, {
      duration: 0.5,
      ease: Power2.easeInOut,
      marginLeft: "0",
    });
  };

  const handleCloseMenu = () => {
    gsap
      .timeline()
      .to(menu.current, {
        duration: 0.5,
        ease: Power2.easeInOut,
        marginLeft: "100vw",
      })
      .then(() => {
        gsap.timeline().to(menu.current, {
          display: "none",
        });
      });
  };

  return (
    <header
      ref={header}
      className="flex justify-between items-center h-[58px] my-4 md:my-[45px] px-10 md:px-[150px] w-screen z-30 text-white fixed"
    >
      <Link to="/">
        <div className="md:w-[515px] text-4xl items-baseline font-graphik font-extralight mix-blend-difference">
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
      <div className="hidden md:flex md:w-[515px] justify-end md:mr-[52px] text-sm gap-8 font-sourceSansPro lg:self-start mt-3">
        <Link to="/projects">
          <h1 className="uppercase text-11 font-graphik tracking-2">works</h1>
        </Link>
        <Link to="/contact">
          <h1 className="uppercase text-11 font-graphik tracking-2">contact</h1>
        </Link>
      </div>
      <div onClick={handleMenu} className="grid gap-1 md:hidden">
        <div className="w-14 h-1 bg-white" />
        <div className="w-10 h-1 bg-white" />
      </div>
      <div
        ref={menu}
        className="w-screen h-screen bg-slate-100 fixed z-50 left-0 bottom-0 ml-[100vw] flex flex-col items-center justify-center gap-4"
      >
        <Link to="/projects">
          <h1 className="uppercase text-black text-[3rem] font-graphik tracking-2">
            works
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="uppercase text-black text-[3rem] font-graphik tracking-2">
            contact
          </h1>
        </Link>
        <div onClick={handleCloseMenu} className=" absolute top-8 right-5">
          <div className="w rotate-45 w-8 h-1 bg-black" />
          <div className="w -rotate-45 w-8 h-1 bg-black" />
        </div>
      </div>
    </header>
  );
};
