
//Assignment 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
while (counter < friends.length) {
  if (typeof friends[counter] === "string") {
    if (friends[counter][index] != "A") {
      console.log(friends[counter]);
    }
  }
  counter++;
}

// "1 => Sayed"
// "2 => Mahmoud"

//Assignment 2 
