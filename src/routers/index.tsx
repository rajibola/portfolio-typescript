import { Blog, Contact, Home, Post, Preview, Projects } from "pages";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "shared/scroll-to-top";

// const Contact = lazy(() => import("pages/contact"));
// const Home = lazy(() => import("pages/home"));
// const Preview = lazy(() => import("pages/preview"));
// const Projects = lazy(() => import("pages/projects"));
// const Blog = lazy(() => import("pages/blog"));
// const Post = lazy(() => import("pages/post"));

export const Navigations: FC<any> = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"projects/:id"} element={<Preview />} />
        <Route path={"/blogs"} element={<Blog />} />
        <Route path={"blogs/:id"} element={<Post />} />
      </Routes>
    </ScrollToTop>
  );
};
