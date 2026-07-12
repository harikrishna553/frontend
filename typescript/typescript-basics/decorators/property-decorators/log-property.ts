function LogProperty(initialValue: any, context: ClassFieldDecoratorContext) {
  console.log(`Decorating property: ${String(context.name)}`);
  console.log(`  Is static? ${context.static}`);
  console.log(`  Is private? ${context.private}`);

  return initialValue;
}

class Product {
  @LogProperty
  name: string = "iPhone";

  @LogProperty
  static category: string = "Electronics";
}

