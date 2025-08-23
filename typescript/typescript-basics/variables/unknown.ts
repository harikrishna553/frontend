let saferArray: unknown[] = [42, "World", false];

let item = saferArray[1];

if (typeof item === "string") {
  console.log(item.toUpperCase()); // Now it's safe!
}

let values: unknown[] = ["Krishna", 25, true, { role: "admin" }];

values.forEach((val) => {
  if (typeof val === "string") {
    console.log("String value:", val.toUpperCase());
  } else if (typeof val === "number") {
    console.log("Number doubled:", val * 2);
  } else if (typeof val === "boolean") {
    console.log("Boolean reversed:", !val);
  } else if (typeof val === "object") {
    console.log("It's an object:", val);
  }
});
