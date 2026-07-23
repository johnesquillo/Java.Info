const arr = ["John", "Esquillo", "Malones"];

alert( arr.indexOf("John"));

let arrays = arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});