//Assignment 1

// Create Your Object Here
let member = new Object({
    name: "Elzero" ,
    age : 38 , 
    country :"Egypt",
    fullDetails : function(){
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
});
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//Assignment 2

// Method One

let objMethodOne = {
    property : "Method One" ,
};
console.log(objMethodOne.property); // "Method One"

// Method Two

let objMethodTwo = new Object({
    property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"

// Method Three

let objMethodThree = Object.create({});
objMethodThree.property = "Method Three" ;
console.log(objMethodThree.property); // "Method Three"

// Method Four

let objMethodFour = Object.assign({});
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

// Assignment 3 

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a:a,} ,threeNums , twoNums );
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// Assignment 4 

// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames).length ;

  for (let i = 0; i < objectLength; i++) {
    console.log(myFavGames);
    console.log(`The Publisher Is ${myFavGames[i].publisher}`);
    console.log(`The Price Is ${myFavGames[i].price}`);
  
    // // Check If Nested Object Has Property (bestThree)
    // if (if) {
    //   console.log("- Game Has Releases");
    //   console.log(`First => ???????`);
    //   console.log(`Second => ???????`);
    //   console.log(`Third => ???????`);
    // }
    // console.log("#".repeat(20));
  }
  
//   // Ouput
  
// //   "The Game Name Is Trinity Universe"
// //   "The Publisher Is NIS America"
// //   "The Price Is 40"
// //   "####################"
// //   "The Game Name Is Titan Quest"
// //   "The Publisher Is THQ"
// //   "The Price Is 50"
// //   "- Game Has Releases"
// //   "First => Immortal Throne"
// //   "Second => Ragnarök"
// //   "Third => Atlantis"
// //   "####################"
// //   "The Game Name Is YS"
// //   "The Publisher Is Falcom"
// //   "The Price Is 40"
// //   "- Game Has Releases"
// //   "First => Oath in Felghana"
// //   "Second => Ark Of Napishtim"
// //   "Third => origin"
// //   "####################"

var locationObject = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    
    "features": [
    { "type": "Feature", "properties": { "Year": "1788", "Town": "Sydney"}, "geometry": { "type": "Point", "coordinates": [ 151.2092955, -33.8688197 ] } },
    { "type": "Feature", "properties": { "Year": "1788", "Town": "Parramatta"}, "geometry": { "type": "Point", "coordinates": [ 151.001111, -33.815 ] } },
    { "type": "Feature", "properties": { "Year": "1791", "Town": "Windsor"}, "geometry": { "type": "Point", "coordinates": [ 150.817222, -33.615 ] } },
    { "type": "Feature", "properties": { "Year": "1806", "Town": "Launceston"}, "geometry": { "type": "Point", "coordinates": [ 147.14408750000001, -41.4332215 ] } }
    ]
    };
    
    
    var i, features;
    for (i = 0; i < locationObject.features.length; i++)
      {
        features = locationObject.features[i];
        document.write(features.properties.Year + " ");
      }
    