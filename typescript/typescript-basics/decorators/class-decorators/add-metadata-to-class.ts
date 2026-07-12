// Decorator to add a version property
function Version(version: string) {
  return function (constructor: Function) {
    constructor.prototype.version = version;
  };
}

@Version("1.0.0")
class Book {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const myBook = new Book("TypeScript for Beginners");
console.log("Book Title:", myBook.title);
console.log("Book Version:", (myBook as any).version);

