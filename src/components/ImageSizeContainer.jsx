import React, { useState } from "react";
import { useMainContext } from "../Context/MainContext";
import "./styles.css";

const ImageSizeContainer = () => {
  const { screenshots } = useMainContext();
  const [activeCollapsible, setActiveCollapsible] = useState("");

  const toggleCollapsible = (size) => {
    setActiveCollapsible((prev) => (prev === size ? "" : size));
  };

  return (
    <div className="image-container">
      {Object.keys(screenshots).map((size) => (
        <div
          key={size}
          className={`collapsible${
            activeCollapsible === size ? " active" : ""
          }`}
        >
          <div
            role="button"
            className="collapsible-btn"
            onClick={() => {
              screenshots[size] && toggleCollapsible(size);
            }}
          >
            {" "}
            <p> {size}</p>
            {!screenshots[size] && (
              <p className="collapsible-btn-warning-title">No screenshots</p>
            )}
          </div>
          <div className="collapsible-content" id={`content-${size}`}>
            {screenshots[size] ? (
              screenshots[size].map((screen, index) => (
                <img
                  className="collapsible-img"
                  key={index}
                  src={screen}
                  alt={`screen ${index + 1}`}
                />
              ))
            ) : (
              <p>No screenshots</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSizeContainer;
