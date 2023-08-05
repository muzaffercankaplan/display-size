import { createContext, useContext, useState } from "react";
import screenData from "../libs/screenshotData.json";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const defaultScreenShots = screenData.English;

  const [language, setLanguage] = useState("English");
  const [screenshots, setScreenshots] = useState(defaultScreenShots);

  const values = {
    language,
    setLanguage,
    screenshots,
    setScreenshots,
    defaultScreenShots,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

const useMainContext = () => useContext(MainContext);

export { MainProvider, useMainContext };
