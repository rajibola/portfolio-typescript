import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigations } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );
}

export default App;
