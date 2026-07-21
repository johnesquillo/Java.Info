let arr = [1, 2];

const name = {
   0: 'John',
   1: "Esquillo",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

alert( arr.concat(name));