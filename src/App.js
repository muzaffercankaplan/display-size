import React from "react";

import Home from "./components/Home/Home";
import "./components/styles.css";
import { MainProvider } from "./Context/MainContext";

const App = () => {
  return (
    <MainProvider>
      <Home />
    </MainProvider>
  );
};

export default App;
