function getPow(x, n) {
    let num = x;

    for(let i = 1; i < n; i++) {
        num *= x;
    }
    return num;
}

let x = prompt('x?');
let n = prompt('n?');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`)
}else{
    alert(getPow(x, n));
}