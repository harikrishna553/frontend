let records = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Raghav" }
];

let index = 0;

while (index < records.length) {
  let record = records[index];
  console.log(`ID: ${record.id}, Name: ${record.name}`);
  index++;
}
