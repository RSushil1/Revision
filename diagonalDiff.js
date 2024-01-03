function diagonalDifference(arr) {
    // Write your code here
    let d1 = arr[0][0] + arr[1][1] + arr[2][2];
    let d2 = arr[0][2] + arr[1][1] + arr[2][0];
    return Math.abs(d1 - d2);

}

console.log(diagonalDifference( [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]))