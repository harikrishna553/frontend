// union-types.ts

// Example 1: A variable that can be a string or a number
let sn: string | number;

sn = 'Krishna';  // OK - it's a string
console.log("sn as string:", sn);

sn = 10;         // OK - it's a number
console.log("sn as number:", sn);

// Example 2: A variable that can be a string or null
let username: string | null;

username = "Krishna";  // OK - it's a string
console.log("username as string:", username);

username = null;       // OK - it's null
console.log("username as null:", username);

// Example 3: A variable that can be a string, number, or undefined
let maybeData: string | number | undefined;

maybeData = "Data";     // OK - string
console.log("maybeData as string:", maybeData);

maybeData = 12345;      // OK - number
console.log("maybeData as number:", maybeData);

maybeData = undefined;  // OK - undefined
console.log("maybeData as undefined:", maybeData);

// maybeData = null;    // Error: Type 'null' is not assignable (unless added to union)

// Example 4: Using union types in a function
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log("ID as string:", id.toUpperCase());  // string method
  } else {
    console.log("ID as number:", id.toFixed(2));      // number method
  }
}

printId("abc123");  // Outputs: ID as string: ABC123
printId(789);       // Outputs: ID as number: 789.00

// Example 5: Union with literal types
let requestStatus: "success" | "error" | "loading";

requestStatus = "success";  // OK
console.log("requestStatus:", requestStatus);

requestStatus = "error";    // OK
console.log("requestStatus:", requestStatus);

// requestStatus = "done";  // Error: "done" is not assignable

// Example 6: Array that can hold numbers or strings
let mixedArray: (string | number)[] = [];

mixedArray.push("Hello");
mixedArray.push(42);
mixedArray.push("World");

console.log("mixedArray:", mixedArray);

// Example 7: Function returning union type
function getValue(flag: boolean): number | string {
  if (flag) {
    return 100;
  } else {
    return "one hundred";
  }
}

const result1 = getValue(true);   // result1 is number | string
const result2 = getValue(false);

console.log("getValue(true):", result1);
console.log("getValue(false):", result2);
