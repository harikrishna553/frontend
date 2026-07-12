enum Gender {
  Male,
  Female
}

console.log(Gender.Male);     // Output: 0
console.log(Gender.Female);   // Output: 1

console.log(Gender[0]);       // Output: Male
console.log(Gender[1]);       // Output: Female

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(HttpStatus.OK);         // Output: 200
console.log(HttpStatus[404]);       // Output: NotFound
console.log(HttpStatus.ServerError); // Output: 500

enum Weather {
  Sunny = "SUNNY",
  Rainy = "RAINY",
  Cloudy = "CLOUDY"
}

console.log(Weather.Sunny);    // SUNNY
