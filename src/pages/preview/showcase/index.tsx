import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export interface IShowcaseProps {
  images?: string[];
  tag?: "mobile" | "web" | undefined;
}
export const Showcase: FC<IShowcaseProps> = ({ images, tag }) => {
  // const items = useRef<HTMLDivElement[]>([]);
  const afterImage = useRef<HTMLDivElement>(null);
  const thirdImage = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLDivElement>(null);

  // const addToRef = (el: HTMLDivElement) =>
  //   el && !items.current.includes(el) && items.current.push(el);

  useLayoutEffect(() => {
    let tl: any;
    gsap.utils.toArray(section.current?.children!).forEach((type: any, i) => {
      tl = gsap.timeline({
        scrollTrigger: {
          id: `${type.id}`,
          trigger: type,
          start: "top top",
          end: () => "+=" + type?.offsetWidth! + "px",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          // markers: true,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(
        afterImage.current,
        { xPercent: 100, x: 0 },
        { xPercent: 0 },
        0
      ).fromTo(
        afterImage.current?.firstChild!,
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );

      tl.fromTo(
        thirdImage.current,
        { xPercent: 100, x: 0 },
        { xPercent: 0 },
        1
      ).fromTo(
        thirdImage.current?.firstChild!,
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        1
      );
    });

    return () => {
      gsap.killTweensOf(afterImage.current);
      gsap.killTweensOf(thirdImage.current);
      gsap.killTweensOf(section.current);
      gsap.utils.toArray(section.current?.children!).forEach((type: any, i) => {
        gsap.killTweensOf(type);
      });
      tl?.kill();
    };
  }, []);

  return (
    <section className={`relative ${tag === "mobile" && "h-[300vh]"}`}>
      <div
        className={`min-h-screen flex items-center justify-center bg-[#4b4b4b] flex-col py-28 ${
          tag === "mobile" ? "gap-0 h-screen w-screen py-0" : "gap-28"
        }`}
      >
        {tag === "mobile" ? (
          <div>
            {/* <div className="w-full h-screen bg-white" /> */}
            <section
              ref={section}
              className="relative comparisonSection h-screen w-screen"
            >
              <div className="w-full h-screen beforeImage bg-[#0F0F11]">
                <img
                  src={images?.[0]}
                  className="w-full h-screen bg-cover object-cover bg-[#0F0F11] bg-center"
                  alt="hero"
                />
              </div>
              <div
                ref={afterImage}
                className="w-full h-screen absolute overflow-hidden top-0 translate-x-full"
              >
                <img
                  src={images?.[1]}
                  className="w-full h-screen bg-cover bg-center object-cover -translate-x-full absolute bg-black"
                  alt="hero"
                />
              </div>

              <div
                ref={thirdImage}
                className="w-full h-screen absolute overflow-hidden top-0 translate-x-full"
              >
                <img
                  src={images?.[2]}
                  className="w-full h-screen bg-cover bg-center object-cover -translate-x-full absolute"
                  alt="hero"
                />
              </div>
              {/* {images?.map((image, id) => {
              return (
                <div className="absolute overflow-hidden top-0 translate-x-full">
                  <img
                    src={image}
                    className="w-full h-full bg-cover -translate-x-full absolute top-0"
                    alt="hero"
                    key={id}
                  />
                </div>
              );
            })} */}
            </section>
          </div>
        ) : (
          images?.map((image, id) => (
            <img
              src={image}
              className="w-[70%] h-[70%] flex items-center justify-center  bg-cover"
              alt="hero"
              key={id}
            />
          ))
        )}
      </div>
    </section>
  );
};
