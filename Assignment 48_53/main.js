//Assignment 1
let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i += 10) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}

//Assignment 2
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i > end2; i--) {
  if (i >= 10) {
    console.log(`${i}`);
  } else {
    console.log(`0${i}`);
  }

  if (i == stop2) {
    break;
  }
}

//Assignment 3
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

// Output
for (let i = start3; i <= end3; i++) {
  console.log(i);
  for (let j = breaker3; j <= end3 - breaker3; j += 2) {
    console.log(`-- ${j}`);
  }
}

//Assignment 4
let index = 10;
let jump = 2;
let end4 = 0;

for (;;) {
  console.log(index);
  index -= 2;
  if (index == 2) {
    break;
  }
}

//Assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let num = 1;
let ii= friends.indexOf("Ahmed");
for (let i = ii; i < friends.length; i++) {
  if (friends[i][ii].toLowerCase() == letter) {
    continue;
  } else {
    console.log(`"${num++} => ${friends[i]}"`);
  }
}



//Assignment 6
let start6 = 0;
let swappedName = "elZerO";

let result="";
for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}
console.log(result);

//Assignment 7 
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = start7 ;i<mix.length;i++){
    if(typeof mix[i] == 'string' || mix[i]==1){
        continue ;
    }
    else{
        console.log(mix[i]);
    }
}