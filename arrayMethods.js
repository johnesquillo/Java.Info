const arr = [1, 2];

let arrayLike = {
    0: "Somthing",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( arr.concat(arrayLike));