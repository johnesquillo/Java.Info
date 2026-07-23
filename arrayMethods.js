const arr = ["John", "Esquillo", "Malones", "John"];

alert( arr.includes("John"));
alert( arr.indexOf("John"));
alert( arr.lastIndexOf("John"));

let arrays = arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});