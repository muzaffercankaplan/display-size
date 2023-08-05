import React from "react";
import { useMainContext } from "../Context/MainContext";
import screenshotData from "../libs/screenshotData.json";

import "./styles.css";

const SelectLanguage = () => {
  const { language, setLanguage, setScreenshots } = useMainContext();

  const handleChange = (event) => {
    setLanguage(event.target.value);
    setScreenshots(screenshotData[event.target.value]);
  };

  const languages = Object.keys(screenshotData);

  return (
    <div className="select_language_container">
      <select
        className="select_language"
        value={language}
        onChange={handleChange}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLanguage;
