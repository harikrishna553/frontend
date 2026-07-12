import Square, { Triangle } from "./shapes";

const sq = new Square(3);
console.log("Square Area:", sq.getArea());

const tri = new Triangle(4, 5);
console.log("Triangle Area:", tri.getArea());
