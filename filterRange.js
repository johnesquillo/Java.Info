function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = filterRange(arr, 3, 7);

alert(filtered);
