function upperCaseFormatter(msg: string): string {
  return msg.toUpperCase();
}

function lowerCaseFormatter(msg: string): string {
  return msg.toLowerCase();
}

function printMessage(formatter: (msg: string) => string, message: string): void {
  console.log(formatter(message));
}

printMessage(upperCaseFormatter, "Hello Ram!");  // Output: HELLO RAM!
printMessage(lowerCaseFormatter, "Hello Lahari!"); // Output: hello lahari!
