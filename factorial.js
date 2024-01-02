// write a function to find factorial of given number

let num = 4;

const findFactorial = (num)=>{
    let factorial = 1;
     for (let i = num; i >= 1; i--) {
        factorial *= i
     }
     return factorial
}

console.log(findFactorial(num))