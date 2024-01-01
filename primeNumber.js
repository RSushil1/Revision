const checkPrime = (num) => {
  if (num <= 1) {
    return `${num} is not a prime number`;
  }

  // Check for numbers greater than 2
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
};

let num = 2;
console.log(checkPrime(num));





