import gsap, { Power3 } from "gsap";
import { RefObject } from "react";

const tl = gsap.timeline();

export const onPressPrevImage = (
  imagelist: RefObject<HTMLDivElement>,
  count: number,
  mainText: RefObject<HTMLDivElement>,
  currentValue: number,
  setcurrentValue: (data: number) => void,
  setcount: (data: number) => void
) => {
  tl.to(imagelist.current?.children[count - 1]!, {
    duration: 1,
    boxShadow: `rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`,
    ease: Power3.easeOut,
  })
    .to(
      imagelist.current,
      {
        duration: 1,
        x: `${currentValue + 100}vw`,
        ease: Power3.easeIn,
      },
      "<"
    )

    .to(imagelist.current?.children[count - 1]!, {
      duration: 0,
      boxShadow: "none",
      onComplete: () => {
        setcount(count - 1);
        setcurrentValue(currentValue + 100);
      },
    }).to([mainText.current?.children], {
      x: "30",
      duration: 0.2,
    })
    .to(
      [mainText.current?.children],
      {
        opacity: 1,
        duration: 0.5,
        x: "0",
        ease: Power3.easeOut,
        stagger: {
          each: 0.1,
        },
      },
      "<0.2"
    );
}

export const onPressNextImage = (
  imagelist: RefObject<HTMLDivElement>,
  count: number,
  mainText: RefObject<HTMLDivElement>,
  currentValue: number,
  setcurrentValue: (data: number) => void,
  setcount: (data: number) => void
) => {
  tl.to(imagelist.current?.children[count - 1]!, {
    duration: 0.9,
    backgroundColor: "black",
    ease: Power3.easeIn,
  })
    .to(
      [mainText.current?.children],
      {
        opacity: 0,
        duration: 0.5,
        x: "-30",
        ease: Power3.easeIn,
        stagger: {
          each: 0.1,
        },
      },
      "<"
    )
    .to(
      imagelist.current,
      {
        duration: 1,
        x: `${currentValue - 100}vw`,
        ease: Power3.easeIn,
      },
      "<"
    )
    .to(imagelist.current?.children[count - 1]!, {
      backgroundColor: "rgba(0,0,0,0.5)",
      duration: 0,
      onComplete: () => {
        setcount(count + 1);
        setcurrentValue(currentValue - 100);
      },
    })
    .to([mainText.current?.children], {
      x: "30",
      duration: 0.2,
    })
    .to(
      [mainText.current?.children],
      {
        opacity: 1,
        duration: 0.5,
        x: "0",
        ease: Power3.easeOut,
        stagger: {
          each: 0.1,
        },
      },
      "<0.2"
    );
};
