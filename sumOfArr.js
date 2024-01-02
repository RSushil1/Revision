 //Write a function that takes an array of numbers and returns the sum of all elements.

 let arr = [1,2,3,4];

 const arrSum = (arr)=>{
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     sum += arr[i]  
   }
   return sum
 }
 
 console.log(arrSum(arr))