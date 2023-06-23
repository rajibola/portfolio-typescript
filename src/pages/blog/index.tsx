import { Header, Footer } from "shared";
import { Hero } from "./hero";
import gsap from "gsap";
import { Posts } from "./posts";

export const Blog = () => {
  const blog = gsap.timeline();

  return (
    <div>
      <Header timeline={blog} show={false} />
      <Hero timeline={blog} />
      <Posts timeline={blog} />
      <Footer />
    </div>
  );
};
