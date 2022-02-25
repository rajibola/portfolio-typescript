import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Preview, Projects } from "pages";

export const Navigations: FC<any> = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/projects"} element={<Projects />} />
      <Route path={"/projects/:id"} element={<Preview />} />
    </Routes>
  );
};
