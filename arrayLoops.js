const names = ["Jazz",  "Blues"];

let getNames = names;

getNames[Math.floor((names.length - 1) / 1)] = "Classics";

getNames.shift();

getNames.unshift("Rap", "Reggae");

names.push("Rock-n-Roll");

alert(getNames);