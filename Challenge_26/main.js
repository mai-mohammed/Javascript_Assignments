let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a,b,c,d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(parseInt((a+d)*97 + 67.2)); // 10000
    
// Get Integer "2" From d Variable With 4 Methods
console.log(a/50); // 2
console.log(Math.floor(d)); // 2
console.log(+(d.toFixed(0))); // 2
console.log(Math.trunc(b)/100); // 2
console.log(Number.isInteger(a)+ Number.isInteger(c)); // 2

// Use Variables b + d To Get This Values
console.log(((b+d)/3.0433).toFixed(2)); // 66.67 => String
console.log(+(((b+d)/3.0433).toFixed(2).slice(3))); // 67 => Number


