// ----------- Assignment  1 -----------

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.split("",1).toString().toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(-6 , -5).toLowerCase()); // e
console.log(userName.slice(0 , 1).toLowerCase()); // e
console.log(userName.substr(userName.length -6 ,userName.length -5 ).toLowerCase().repeat(3)); // eee


// ----------- Assignment  2 -----------

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.startsWith(letterZ,2)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


