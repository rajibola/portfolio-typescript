import { useWindowSize } from "hooks/useWindowSize";
import { ReactChildren, useCallback, useEffect, useRef } from "react";

export const SmoothScroll = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const data = {
    ease: 0.1,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

  const setBodyHeight = () => {
    document.body.style.height = `${
      containerRef.current!.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current!.style.transform = `translateY(-${data.rounded}px)`;

    requestAnimationFrame(() => smoothScroll());
  }, [data]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [smoothScroll]);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  return <div ref={containerRef}>{children}</div>;
};
