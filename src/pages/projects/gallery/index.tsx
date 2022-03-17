import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ProjectCard } from "shared/project-card";
import styled from "styled-components";
import PROJECTS from "utils/PROJECTS";

export const Gallery = () => {
  const button = useRef<HTMLDivElement>(null);
  const buttonText = useRef<HTMLDivElement>(null);
  const items = useRef<HTMLDivElement[]>([]);
  const page = useRef<HTMLDivElement>(null);

  const addToRef = (el: HTMLDivElement) =>
    el && !items.current.includes(el) && items.current.push(el);

  useLayoutEffect(() => {
    var moveCircle = (e: any) => {
      return gsap.to(button.current, {
        duration: 0.25,
        css: {
          left: e.clientX,
          top: e.clientY,
        },
      });
    };
    page.current?.addEventListener("mousemove", moveCircle);
    items.current?.forEach(function (el: any) {
      el.addEventListener("mouseover", () => {
        gsap.to(button.current, {
          duration: 0.25,
          scale: 1,
          autoAlpha: 1,
        });
      });

      el.addEventListener("mouseout", () => {
        gsap.to(button.current, {
          duration: 0.25,
          scale: 0.5,
          autoAlpha: 0,
        });
      });

      el.addEventListener("mousedown", () => {
        gsap.to(button.current, {
          duration: 0.5,
          css: { transform: `translate(-50%, -50%) scale(0.75)` },
        });

        gsap.to(buttonText.current, {
          duration: 0.25,
          css: { opacity: 1 },
        });
      });

      el.addEventListener("mouseup", () => {
        gsap.to(button.current, {
          duration: 1,
          css: { background: `transparent` },
        });

        gsap.to(button.current, {
          duration: 0.5,
          css: { transform: `translate(-50%, -50%) scale(1)` },
        });

        gsap.to(buttonText.current, {
          duration: 0.25,
          css: {
            opacity: 1,
          },
        });
      });
    });

    return () => {
      page.current?.removeEventListener("mousemove", moveCircle);
      items.current?.forEach((el: any) => {
        el.removeEventListener("mouseover", moveCircle);
        moveCircle(el).kill();
      });
    };
  }, []);

  return (
    <div
      ref={page}
      className="px-[10vw] w-full max-w-[1280px] mx-auto font-graphik -mb-10 h-fit"
    >
      <div className="flex flex-wrap">
        {PROJECTS.map(({ title, name, tools, images }, i) => {
          const hasMargin = (i + 1) % 2 === 0;
          return (
            <ProjectCard
              data={{ title, name, tools, images, margin: hasMargin }}
              // title={title}
              // name={name}
              // tools={tools}
              // images={images}
              // margin={hasMargin}
              key={i}
              ref={addToRef}
            />
          );
        })}
      </div>

      <SeeMoreButton ref={button} className="">
        <div ref={buttonText}>more</div>
      </SeeMoreButton>
    </div>
  );
};

const SeeMoreButton = styled.div`
  pointer-events: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff9999;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: transparent;

  &:focus {
    outline: none;
  }
`;
