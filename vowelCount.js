let string = "hello world";
let arr = string.split('');
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < string.length; i++) {
  if (
    arr[i] === 'a' ||
    arr[i] === 'e' ||
    arr[i] === 'i' ||
    arr[i] === 'o' ||
    arr[i] === 'u'
  ) {
    vowelCount++;
  } else if (arr[i] !== ' ') {
    consonantCount++;
  }
}

console.log(`Number of vowels is ${vowelCount} and number of consonants is ${consonantCount}`);
