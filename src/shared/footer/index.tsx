import { dark } from "assets/images";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    gsap.from([margin.current, bottom.current], {
      y: "-50%",
      // duration: 0.5,
      scrollTrigger: {
        trigger: screenRef.current,
        start: "top bottom",
        end: "center center",
        pinSpacing: false,
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });

    gsap.from([image.current], {
      y: "-30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: screenRef.current,
        start: "top bottom",
        end: "center center",
        pinSpacing: false,
        toggleActions: "play none none reverse",
        scrub: 5,
      },
    });
  }, []);

  return (
    <footer
      ref={screenRef}
      className="font-graphik overflow-hidden top-0 w-full h-screen sticky bg-black"
    >
      <BgImage
        ref={image}
        className="w-[70%] h-[70%] bg-center bg-contain bg-no-repeat absolute -right-40 rotate-180 opacity-50 rounded-full"
      />

      <div ref={margin} className="mt-[15%] mx-[15%] relative z-10 h-full">
        <div className="w-[70%] min-w-[300px]">
          <div className="my-[2.3em] overflow-hidden h-[12px]">
            <h1 className="text-[11px] tracking-[2px] uppercase font-normal">
              /{" "}
              <Link to="/projects" className="opacity-50">
                CONTACT
              </Link>{" "}
              — Clane website
            </h1>
          </div>
          <Link to="">
            <StyledTitle
              className="text-80 w-fit font-extralight text-transparent bg-clip-text bg-gradient-to-br from-white/80 to-white/50 z-20 mb-8"
              ref={title}
            >
              Let's work together.
            </StyledTitle>
          </Link>
          <h2 className="text-22 font-sourceSansPro font-light text-transparent bg-clip-text bg-gradient-to-br from-white/50 to-white/50 z-20">
            {/* I'm available for full-time, freelance and contract work. */}I
            am currently open to new job opportunities. If you wanna get in
            touch, talk to me about a project collaboration or just say hi
          </h2>
        </div>
      </div>
      <div className="w-[110vh] h-[110vh] rounded-full border border-white/10 absolute -left-[50vh] top-0" />

      <div ref={bottom} className="w-full bottom-0 absolute z-30">
        <h1 className="text-center mb-1 font-sourceSansPro text-white opacity-50">
          Design inspired by fleava's agency website. Remixed and built by
          Ridwan Ajibola
        </h1>
        <div className="w-full h-[18px] my-10  flex items-center justify-center text-white/80 hover:text-white/50">
          <h1 className="font-robotoCondensed font-light text-14 w-[150px] text-right">
            © Ridwan Ajibola 2022
          </h1>
          <div className="w-[1px] h-full bg-white mx-5" />
          <div className="flex gap-4 w-[150px]">
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
    </footer>
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
