function greetAll(...names: string[]) {
  for (let name of names) {
    console.log(`Hello, ${name}!`);
  }
}

greetAll("Ram", "Lahari", "Chamu");