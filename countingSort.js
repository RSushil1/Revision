function countingSort(arr) {
    const count = new Array(100).fill(0); // Initialize count array for values 0 to 99
    
    // Store count of each element in the input array
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
    
    // Modify the count array to store the actual position of elements
    for (let i = 1; i < 100; i++) {
      count[i] += count[i - 1];
    }
    
    const output = new Array(arr.length); // Create output array
    
    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
    
    // Copy the sorted elements into the original array
    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
    
    return count;
  }
  
  // Example usage:
  const arr = [23, 45, 12, 78, 90, 45, 67, 34, 22, 99, 1, 56, 78];
  const sortedArr = countingSort(arr);
  console.log("Sorted array:", sortedArr);
  