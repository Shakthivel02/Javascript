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

//Fibonacci(3);
