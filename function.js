function getPrimes(n) {
   ako_to_si_natoy: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue ako_to_si_natoy;
        }
            alert(i);

    }
}

let num = prompt('Enter a number', "");
 
getPrimes( Number(num));
