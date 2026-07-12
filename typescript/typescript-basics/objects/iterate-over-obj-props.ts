let student = {
  name: "Krishna",
  score: 90,
  greet : function(){
    return `Hello ${this.name}`
  }
};

for(let key in student){
    console.log(`key : ${key}, value: ${student[key]}`); 
}
