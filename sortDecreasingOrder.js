function sortDecreasingOrder(arr) {
    return arr

    .sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];

let sortedArr = sortDecreasingOrder(arr);

alert(sortedArr);
