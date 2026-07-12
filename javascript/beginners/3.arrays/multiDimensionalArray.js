function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
  }
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

printMatrix(matrix)
console.log(`matrix[0][0] : ${matrix[0][0]}`)
console.log(`matrix[1][1] : ${matrix[1][1]}`)
console.log(`matrix[2][2] : ${matrix[2][2]}`)
console.log(`rows : ${matrix.length}`)
console.log(`columns : ${matrix[0].length}`)

