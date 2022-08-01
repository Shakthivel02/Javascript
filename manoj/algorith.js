//fibnaci
function fibno(n) {
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibno(4));
//factorial
function Fact(n) {
  let fabb = 1;
  for (let i = 1; i <= n; i++) {
    fabb = fabb * i;
  }
  return fabb;
}

console.log(Fact(10));
//primeNumber
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    } else return true;
  }
}
console.log(isPrime(1));
console.log(isPrime(5));

//recursive
function fibbb(n) {
  if (n < 2) {
    return n;
  }
  return fibbb(n - 1) + fibbb(n - 2);
}

console.log(fibbb(7));
//linearSearch
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return "Not Founded";
}

console.log(search([1, 5, 3, 6, 77], 77));

function binary(arr, tar) {
  let leftindex = 0;
  let rightIndex = arr.length - 1;
  while (leftindex <= rightIndex) {
    let middleindex = Math.floor((leftindex + rightIndex) / 2);
    if (tar === arr[middleindex]) {
      return middleindex;
    }
    if (tar < arr[middleindex]) {
      rightIndex = middleindex - 1;
    } else {
      leftindex = middleindex + 1;
    }
  }
  return -1;
}

console.log(binary([1, 4, 8, 33, 0], 8));
