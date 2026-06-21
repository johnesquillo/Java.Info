let showPrimes = (n) => {
    for (let i = 2; i < n; i++) {
        if(!isPrime(i)) continue;

        alert(i);
    }
}

let isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }
    return true;
}

let num = prompt('Enter a number');

showPrimes(Number(num));