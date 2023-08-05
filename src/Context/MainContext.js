import { createContext, useContext, useState } from "react";

const MainContext = createContext();

const MainProider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  const [screenshots, setScreenshots] = useState([]);

  const values = {
    language,
    setLanguage,
    screenshots,
    setScreenshots,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

const useMainContext = () => useContext(MainContext);

export { MainProider, useMainContext };
