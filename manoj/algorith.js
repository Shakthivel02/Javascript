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