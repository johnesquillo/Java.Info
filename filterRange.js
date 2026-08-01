function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = filterRangeInPlace(arr, 3, 7);

alert(filtered);
