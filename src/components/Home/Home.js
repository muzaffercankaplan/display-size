import React from "react";

import ImageSizeContainer from "../ImageSizeContainer";
import SelectLanguage from "../SelectLanguage";

const Home = () => {
  return (
    <div className="home-container">
      <SelectLanguage />
      <ImageSizeContainer />
    </div>
  );
};

export default Home;
