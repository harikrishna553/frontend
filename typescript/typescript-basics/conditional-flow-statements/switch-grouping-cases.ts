let day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekday");
    break;
  case 6:
  case 7:
    console.log("It's the weekend");
    break;
  default:
    console.log("Invalid day");
}
