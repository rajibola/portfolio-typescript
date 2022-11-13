import { dark } from "assets/images";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const margin = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: screenRef.current,
    //       start: "top bottom",
    //       end: "center center",
    //       toggleActions: "play none none reverse",
    //       scrub: 1,
    //       id: "footer",
    //     },
    //   })
    //   .from([margin.current, bottom.current], {
    //     y: "-50%",
    //     duration: 0.5,
    //   })
    //   .from([image.current], {
    //     y: "-30%",
    //     duration: 0.5,
    //   });
  }, []);

  return (
    <div
      ref={screenRef}
      className="font-graphik overflow-hidden top-0 w-screen h-screen relative bg-black"
    >
      <BgImage
        ref={image}
        className="lg:w-[70%] lg:h-[70%] min-h-[400px] w-[800px] -top-20 bg-center bg-contain bg-no-repeat absolute lg:-right-40 -right-18 rotate-180 opacity-50 rounded-full"
      />

      <div
        ref={margin}
        className="mt-0 lg:mt-[15%] lg:mx-[15%] mx-0 px-[10%] relative z-10 h-full lg:block flex items-center"
      >
        <div className="lg:w-[70%] lg:min-w-[300px] min-w-0">
          <div className="my-[2.3em] overflow-hidden h-[12px]">
            <h1 className="text-[11px] tracking-[2px] uppercase font-normal">
              /{" "}
              <Link to="/contact" className="opacity-50">
                contact
              </Link>{" "}
              — About
            </h1>
          </div>
          <Link to="">
            <StyledTitle
              className="text-[3rem] lg:text-80 w-fit font-extralight text-transparent bg-clip-text bg-gradient-to-br from-white/80 to-white/50 z-20 mb-8"
              ref={title}
            >
              Let's work together.
            </StyledTitle>
          </Link>
          <h2 className="lg:text-22 text-lg font-sourceSansPro font-light text-transparent bg-clip-text bg-gradient-to-br from-white/60 to-white/80 z-20">
            {/* I'm available for full-time, freelance and contract work. */}I
            am currently open to new job opportunities. If you wanna get in
            touch, talk to me about a project collaboration or just say hi
          </h2>
        </div>
      </div>
      <div className="w-[110vh] h-[110vh] rounded-full border border-white/10 absolute -left-[50vh] top-0" />

      <div
        ref={bottom}
        className=" px-[10%] lg:px-0 w-full bottom-0 absolute z-30"
      >
        <h1 className="text-center mb-1 font-sourceSansPro text-white opacity-50 text-14 lg:text-16">
          Design inspired by fleava's agency website. Remixed and built by
          Ridwan Ajibola
        </h1>
        <div className="w-full h-[18px] lg:my-10 my-6  flex items-center justify-center text-white/80 hover:text-white/50">
          <h1 className="font-robotoCondensed font-light text-14 lg:w-[150px] w-fit text-right">
            © Ridwan Ajibola 2022
          </h1>
          <div className="w-[1px] h-full bg-white mx-5" />
          <div className="flex gap-4 lg:w-[150px] w-fit">
            <Link to="">
              <FaLinkedin className="hover:text-white" />
            </Link>
            <Link to="">
              <BsStackOverflow className="hover:text-white" />
            </Link>
            <Link to="">
              <AiOutlineGithub className="hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Neumorphism = styled.div`
  border-radius: 75px;
  background: linear-gradient(145deg, #1e1e1e, #191919);
  box-shadow: 9px 9px 18px #181818, -9px -9px 18px #202020;
`;

export const Glassmorphism = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const BgImage = styled.div`
  /* background: rgb(255, 255, 255); */
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 56%,
      rgba(0, 0, 0, 1) 86%
    ),
    url(${dark});
  box-shadow: 0 0 2rem 2rem black inset;
`;

export const StyledTitle = styled.h1`
  ${tw``};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 0%;
    height: 2.5px;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    bottom: 10px;
    left: 0;
    margin-right: 10px;
    transition: width 0.5s ease-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
