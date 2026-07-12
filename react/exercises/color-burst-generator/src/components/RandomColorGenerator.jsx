import { useState } from "react";
import "../css/styles.css";
const {
  ColorCodes,
  generateRandomHexColor,
  generateRandomRGBColor,
  generateRandomRGBAColor,
  generateRandomHSLColor,
  generateRandomHSLAColor,
} = require("../utils/colorUtils");

export default function RandomColorGenerator() {
  const [color, setColor] = useState(null);
  const [colorCode, setColorCode] = useState(null);

  function generateRandomColor(colorCode) {
    let color = null;

    if (ColorCodes.Hexadecimal === colorCode) {
      color = generateRandomHexColor();
    } else if (ColorCodes.RGB === colorCode) {
      color = generateRandomRGBColor();
    } else if (ColorCodes.RGBA === colorCode) {
      color = generateRandomRGBAColor();
    } else if (ColorCodes.HSL === colorCode) {
      color = generateRandomHSLColor();
    } else if (ColorCodes.HSLA === colorCode) {
      color = generateRandomHSLAColor();
    }
    //console.log(color);
    setColor(color);
  }

  return (
    <>
      <div className="container">
        <div className="buttonsToChooseRandomColor">
          <button
            class="button"
            onClick={() => generateRandomColor(ColorCodes.Hexadecimal)}
          >
            {ColorCodes.Hexadecimal}
          </button>
          <button
            class="button"
            onClick={() => generateRandomColor(ColorCodes.RGB)}
          >
            ColorCodes.RGB
          </button>
          <button
            class="button"
            onClick={() => generateRandomColor(ColorCodes.RGBA)}
          >
            ColorCodes.RGBA
          </button>
          <button
            class="button"
            onClick={() => generateRandomColor(ColorCodes.HSL)}
          >
            ColorCodes.HSL
          </button>
          <button
            class="button"
            onClick={() => generateRandomColor(ColorCodes.HSLA)}
          >
            ColorCodes.HSLA
          </button>
        </div>

        <div
          className="areaToDisplayRandomColor"
          style={{
            backgroundColor: color,
          }}
        >
          Color : {color ? color : "None"}
        </div>
      </div>
    </>
  );
}
