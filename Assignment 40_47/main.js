//Assignment 1 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),(num-myFriends.length))); // ["Ahmed", "Elham", "Osama"];
let lastmyfri=myFriends.pop(); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//Assignment 2 

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
let firstfri= friends.shift();
let lastfri= friends.pop();
console.log(friends); // ["Eman", "Osama"]



//Assignment 3 
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]


//Assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO


//Assignment 5 
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes("JS")){
  console.log("Found");
}

if(haystack.indexOf("JS")!=-1){
  console.log("Found");
}

if(haystack.lastIndexOf("JS")!=-1){
  console.log("Found");
}




//Assignment 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs=allArrs.concat(arr1,arr2).sort().slice(arr2.length);

// Your Code Here

console.log(allArrs.join("").toLowerCase()); // fxy