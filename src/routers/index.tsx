import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, Preview, Projects, Blog } from "pages";
import ScrollToTop from "shared/scroll-to-top";

export const Navigations: FC<any> = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/projects/:id"} element={<Preview />} />
        <Route path={"/blogs"} element={<Blog />} />
      </Routes>
    </ScrollToTop>
  );
};
