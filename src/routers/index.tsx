import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, Preview, Projects } from "pages";
import ScrollToTop from "shared/scroll-to-top";

export const Navigations: FC<any> = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/projects/:id"} element={<Preview />} />
      </Routes>
    </ScrollToTop>
  );
};
