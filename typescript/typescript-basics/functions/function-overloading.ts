/**
 * Doubles a numeric value or duplicates a string.
 * 
 * @param x - A number to be doubled.
 */
function doubleValue(x: number): void;

/**
 * Doubles a numeric value or duplicates a string.
 * 
 * @param x - A string to be duplicated with a space separator.
 */

function doubleValue(x: number | string): void {
  if (typeof x === "number") {
    console.log(x * 2);
  } else {
    console.log(x + " " + x);
  }
}

doubleValue(5);       // OK
doubleValue("hi");    // OK

