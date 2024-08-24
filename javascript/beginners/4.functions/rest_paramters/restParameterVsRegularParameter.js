function oldWay() {
  console.log(arguments);
}

function newWay(...args) {
  console.log(args); 
}

oldWay(1, 2, 3);
newWay(1, 2, 3);
