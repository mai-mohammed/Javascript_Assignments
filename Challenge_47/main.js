let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let ahmed = my.shift();
let Mazero = my.shift();
let Elham = my.shift();
let Osama = my.shift();
let Gamal = my.shift();
let Ameer = my.shift();
my.unshift(ahmed);
my.unshift(Mazero);
my.unshift(Elham);
my.unshift(Osama);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];



console.log(my.slice(my.length-counter,counter)); // ["Elham", "Mazero"]
console.log(my);
my.shift();
my.shift();
my.unshift(Osama);
my.unshift(Elham);
my.push(Ameer);
console.log(my[zero].slice(zero,my.length-counter)+my[my.length-counter].slice(my.length-counter)); // "Elzero"

my.shift();
my.shift();
my.unshift(Osama)
console.log(my);
console.log(my[counter][my.length]+my[zero][zero]); // "rO"