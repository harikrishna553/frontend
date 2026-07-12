function LogCall(
  value: any, 
  context: ClassMethodDecoratorContext
) {
  const originalMethod = value;

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`Calling ${String(context.name)} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result from ${String(context.name)}:`, result);
    return result;
  }

  return replacementMethod;
}

class UserService {
  constructor(public name: string) {}

  @LogCall
  getUserGreeting(greeting: string) {
    return `${greeting}, ${this.name}!`;
  }
}

const user = new UserService("Alice");
user.getUserGreeting("Hello");
