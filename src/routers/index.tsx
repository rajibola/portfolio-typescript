import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, Preview, Projects, Blog, Post } from "pages";
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
        <Route path={"/projects/:id"} element={<Preview />} />
        <Route path={"/blogs"} element={<Blog />} />
        <Route path={"/post"} element={<Post />} />
      </Routes>
    </ScrollToTop>
  );
};
