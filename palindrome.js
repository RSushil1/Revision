let str = "abcddcba";

const checkPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

console.log(checkPalindrome(str)); // Output will be true or false
