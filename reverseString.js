//Implement a function that reverses a string without using any built-in reverse function.
let str = "abcd";

const reverseStr = (str) => {
    let arr = str.split("");
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverseArr.push(arr[i]);
    }
    return reverseArr.join(""); // Join the array back into a string
  };
  
  console.log(reverseStr(str));
  