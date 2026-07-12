const ColorCodes = {
  Hexadecimal: "Hexadecimal",
  RGB: "RGB",
  RGBA: "RGBA",
  HSL: "HSL",
  HSLA: "HSLA",
};

function getRandomCharFromArray(arr) {
  if (arr.length === 0) return null; // Return null if the array is empty
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const hexChars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexChar() {
  return getRandomCharFromArray(hexChars);
}

function generateRandomHexColor() {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    str += getRandomHexChar();
  }
  return str;
}

function generateRandomRGBColor() {
  let str = "rgb(";
  let red = generateRandomNumber(255);
  let green = generateRandomNumber(255);
  let blue = generateRandomNumber(255);

  str += red;
  str += ",";
  str += green;
  str += ",";
  str += blue;
  str += ")";
  return str;
}

function generateRandomRGBAColor() {
  let str = "rgba(";
  let red = generateRandomNumber(255);
  let green = generateRandomNumber(255);
  let blue = generateRandomNumber(255);
  let alpha = Math.random();

  str += red;
  str += ",";
  str += green;
  str += ",";
  str += blue;
  str += ",";
  str += alpha;
  str += ")";
  return str;
}

function generateRandomHSLColor() {
  let str = "hsl(";
  let hue = generateRandomNumber(360);
  let saturation = generateRandomNumber(100);
  let lightness = generateRandomNumber(100);

  str += hue;
  str += ",";
  str += saturation + "%";
  str += ",";
  str += lightness + "%";
  str += ")";
  return str;
}

function generateRandomHSLAColor() {
  let str = "hsla(";
  let hue = generateRandomNumber(360);
  let saturation = generateRandomNumber(100);
  let lightness = generateRandomNumber(100);
  let alpha = Math.random();

  str += hue;
  str += ",";
  str += saturation + "%";
  str += ",";
  str += lightness + "%";
  str += ",";
  str += alpha;
  str += ")";
  return str;
}

module.exports = {
  generateRandomHSLAColor,
  generateRandomHSLColor,
  generateRandomRGBAColor,
  generateRandomRGBColor,
  generateRandomHexColor,
  getRandomHexChar,
  generateRandomNumber,
  getRandomCharFromArray,
  ColorCodes,
};
