import React, { useMemo, useState } from "react";
import { useMainContext } from "../Context/MainContext";

import "./styles.css";

const ScreenShots = ({ size }) => {
  const { screenshots, language, defaultScreenShots } = useMainContext();
  const [warningMessage, setWarningMessage] = useState("");
  const imageScreen = useMemo(() => {
    if (screenshots[size]) {
      return screenshots[size];
    } else {
      if (language === "English") {
        if (+size <= 5.5) {
          screenshots[5.5] && setWarningMessage(`Using 5.5" Display`);
          return screenshots[5.5];
        } else {
          setWarningMessage(`Using 6.5" Displays`);
          return screenshots[6.5];
        }
      } else {
        if (+size <= 5.5) {
          if (screenshots[5.5]) {
            setWarningMessage(`Using 5.5" Display`);
            return screenshots[5.5];
          } else if (defaultScreenShots[size]) {
            setWarningMessage(`Using English ${size}" Display`);
            return defaultScreenShots[size];
          } else {
            return defaultScreenShots[5.5];
          }
        } else {
          if (screenshots[6.5]) {
            setWarningMessage(`Using 6.5" Display`);
            return screenshots[6.5];
          } else if (defaultScreenShots[size]) {
            setWarningMessage(`Using English ${size}" Display`);
            return defaultScreenShots[size];
          } else {
            setWarningMessage(`Using English 6.5" Display`);
            return defaultScreenShots[6.5];
          }
        }
      }
    }
  }, [size, screenshots, language, defaultScreenShots]);

  return (
    <div className="collapsible-content">
      {warningMessage && imageScreen && <p> {warningMessage} </p>}
      <div className="collapsible-content-subcontainer">
        {imageScreen ? (
          imageScreen.map((screen, index) => (
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
  );
};

export default ScreenShots;
