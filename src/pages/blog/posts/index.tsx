import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import tw from "twin.macro";

gsap.registerPlugin(ScrollTrigger);

export const Posts = ({ timeline }: { timeline: gsap.core.Timeline }) => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

const Container = styled.div`
  ${tw` z-20 flex mx-auto pt-32 pb-10 text-white gap-10 flex-wrap`}
  width: min(100% - 3rem, 140ch);
  height: 100vh;
`;

const Post = () => {
  return <div className=" w-[30%] h-80 border border-slate-400"></div>;
};
