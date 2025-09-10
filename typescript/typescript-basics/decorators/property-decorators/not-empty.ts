function NonEmpty(initialValue: string, context: ClassFieldDecoratorContext) {
  context.addInitializer(function () {
    let value = initialValue;

    Object.defineProperty(this, context.name, {
      get() {
        return value;
      },
      set(newVal: string) {
        if (!newVal || newVal.trim() === "") {
          throw new Error(`Property "${String(context.name)}" cannot be empty!`);
        }
        value = newVal;
      },
      enumerable: true,
      configurable: true
    });
  });

  return undefined; // ignore the default initializer
}

class Book {
  @NonEmpty
  title: string = "Default Title";
}

const b = new Book();
console.log(b.title);   // ✅ "Default Title"
b.title = "";           // ❌ Error: Property "title" cannot be empty!

