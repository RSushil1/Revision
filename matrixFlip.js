function findMaxTopLeftQuadrant(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Flip the matrix
    function flipMatrix(matrix) {
      return matrix[0].map((_, index) => matrix.map(row => row[index]));
    }
  
    // Find the maximum value in the top-left quadrant
    function findMax(matrix) {
      let max = matrix[0][0];
      for (let i = 0; i < rows / 2; i++) {
        for (let j = 0; j < cols / 2; j++) {
          max = Math.max(max, matrix[i][j]);
        }
      }
      return max;
    }
  
    const flippedMatrix = flipMatrix(matrix);
    console.log(flippedMatrix)
    const maxInTopLeft = findMax(flippedMatrix);
    return maxInTopLeft;
  }
  
  // Example matrix
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const maxTopLeft = findMaxTopLeftQuadrant(matrix);
  console.log("Maximum value in the top-left quadrant:", maxTopLeft);
  