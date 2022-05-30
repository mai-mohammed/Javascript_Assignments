// ----------- Assignment  1 -----------

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 * 10000); // 100000
console.log(3e4 + 7e4); // 100000
console.log(1e6 - 9e5); // 100000
console.log(5e4 * 2); // 100000
console.log(10_000 * 10); // 100000
console.log(1_000_000 / 10); // 100000
console.log(5e6 / 50); // 100000
console.log(200_000 / 2); // 100000
console.log(1_100_000 % 1e6); // 100000

// ----------- Assignment  2 -----------
console.log(-Number.MIN_SAFE_INTEGER);

// ----------- Assignment  3 -----------
console.log(Number.MAX_SAFE_INTEGER );

// ----------- Assignment  4 -----------

let myVar = "100.56789 Views";

console.log(Math.trunc(parseFloat(myVar)));
console.log(parseInt(myVar));
console.log(+(parseFloat(myVar).toFixed(2)));

// ----------- Assignment  4 -----------

let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num));

// ----------- Assignment  4 -----------

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+(flt.toFixed(0))); // 10
console.log(Math.trunc(flt)); // 10
console.log(+(flt.toString().slice(0,3))); // 10

// ----------- Assignment  4 -----------

console.log(parseInt(Math.random()*5));
console.log(Math.floor(Math.random()*5));

