//duplicates:
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const duplicate = numbers.filter((item, index) => {
  return index !== numbers.indexOf(item);
});

//fibonacci
let n1 = 0;
let n2 = 1;

const Fibonacci = (arg) => {
  for (let i = 0; i < arg; i++) {
    var nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
};

Fibonacci(3);

//primeNumber
const Prime = (arg) => {
  let isPrime;
  if (arg === 1) {
    console.log("1 is nor prime neither compound");
  } else {
    for (let i = 2; i <= Math.sqrt(arg); i++) {
      if (arg % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
  return isPrime;
};

//console.log(Prime(7) ? "its a prime number" : "its not a prime number");

//power of 2:

const isPowerOfTwo = (arg) => {
  do {
    if (arg % 2 !== 0) {
      return false;
    } else {
      arg /= 2;
    }
  } while (arg > 1);
  return true;
};

//console.log(isPowerOfTwo(7));

//method 2:
//only works for 1,2,4,8,...

const ispower = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(ispower(16));
