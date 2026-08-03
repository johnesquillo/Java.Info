function copySorted(arr) {
    return arr

    .sort( (a, b) => a.localeCompare(b)  );
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sortedArr = copySorted(arr);

alert(sortedArr);