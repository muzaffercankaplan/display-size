import React, { useEffect } from "react";
import { useMainContext } from "../../Context/MainContext";

import screenshotData from "../../screenshotData.json";
import ImageSizeContainer from "../ImageSizeContainer";
import SelectLanguage from "../SelectLanguage";

const Home = () => {
  const { language, setScreenshots } = useMainContext();

  useEffect(() => {
    const screenshotsForLanguage = screenshotData[language];
    setScreenshots(screenshotsForLanguage);
  }, [language]);

  return (
    <div className="home-container">
      <SelectLanguage />
      <ImageSizeContainer />
    </div>
  );
};

export default Home;
