import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Projects } from "pages";

export const Navigations: FC<any> = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/projects"} element={<Projects />} />
    </Routes>
  );
};
