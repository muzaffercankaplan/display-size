import React from "react";

import Home from "./components/Home/Home";
import "./components/styles.css";
import { MainProider } from "./Context/MainContext";

const App = () => {
  return (
    <MainProider>
      <Home />
    </MainProider>
  );
};

export default App;
