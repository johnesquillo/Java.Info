let showPrimes = (n) => {
    nextPrime: for (let i = 2; i < n; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
            alert(i);
    }
}
let num = prompt('Enter a number');
showPrimes(Number(num));