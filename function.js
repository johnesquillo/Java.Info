function getPrimes(n) {
    getPrimes:
        for (let i = 2; i < n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue getPrimes;
            }
                alert(i);
        }
}

const num = prompt('Enter a number', '');

getPrimes(Number(num));