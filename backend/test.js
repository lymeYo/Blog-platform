const A = [
  [1, 2, 3],
  [4, 5, 6],
] // [2][3]

const B = [
  [1, 2],
  [3, 4],
  [3, 4]
] //[3][2]

const MultiMatrices = (A, B) => {
  let C = [];
  for (let Crow = 0; Crow < 2; Crow++) { //A rows
    C[Crow] = [];
    for (let Ccol = 0; Ccol < 2; Ccol++) { //B cols
      C[Crow][Ccol] = 0;
      
      for (let AOrBInd = 0; AOrBInd < 3; AOrBInd++) {
        C[Crow][Ccol] += A[Crow][AOrBInd] * B[AOrBInd][Ccol]
      }

    } 
  }

  return C
}

console.log(MultiMatrices(A, B));