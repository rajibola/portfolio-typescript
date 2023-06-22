import { Header } from "shared";
import { Hero } from "./hero";
import gsap from "gsap";

export const Blog = () => {
  const blog = gsap.timeline();

  return (
    <div>
      <Header timeline={blog} show={false} />
      <Hero timeline={blog} />
    </div>
  );
};
