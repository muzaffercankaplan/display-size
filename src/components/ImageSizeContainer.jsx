import React, { useState } from "react";
import { useMainContext } from "../Context/MainContext";
import ScreenShots from "./ScreenShots";
import "./styles.css";

const ImageSizeContainer = () => {
  const { screenshots, language } = useMainContext();
  const [activeCollapsible, setActiveCollapsible] = useState("");

  const toggleCollapsible = (size) => {
    setActiveCollapsible((prev) => (prev === size ? "" : size));
  };

  return (
    <div className="image-container">
      {Object.keys(screenshots).map((size) => (
        <div
          key={language + size}
          className={`collapsible ${
            activeCollapsible === size ? " active" : ""
          }`}
        >
          <div
            role="button"
            className="collapsible-btn"
            onClick={() => {
              toggleCollapsible(size);
            }}
          >
            <p className="collapsible-btn-text">iPhone {size}" Display </p>
          </div>
          <div id={`content-${size}`}>
            <ScreenShots size={size} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSizeContainer;
