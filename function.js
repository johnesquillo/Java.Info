function showPrime(n) {
    nextPrime:  for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if(i % j == 0) continue nextPrime;
        }
            alert(i);
    }
}

let number = prompt('Enter a number');

showPrime(Number(number));