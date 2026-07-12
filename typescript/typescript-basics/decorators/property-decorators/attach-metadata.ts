const requiredProps: string[] = [];

function Required(initialValue: any, context: ClassFieldDecoratorContext) {
  requiredProps.push(String(context.name));
  return initialValue;
}

class User {
  @Required
  username: string = "";

  @Required
  email: string = "";

  password: string = "";
}

console.log("Required properties:", requiredProps);

