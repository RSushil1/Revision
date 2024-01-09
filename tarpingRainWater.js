function trap(height) {
    if (height.length === 0) {
        return 0;
    }
    
    let leftMax = [];
    let rightMax = [];
    let waterTrapped = 0;
    
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    for (let i = 0; i < height.length; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return waterTrapped;
}

// Test cases
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height1)); // Output: 6

const height2 = [4, 2, 0, 3, 2, 5];
console.log(trap(height2)); // Output: 9
