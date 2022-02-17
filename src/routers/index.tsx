import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export const Navigations = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};
