export default function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Named export function
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}
