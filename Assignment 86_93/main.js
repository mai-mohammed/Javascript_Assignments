// Assignment 1

let myElement1 = document.getElementById("elzero");
let myElement2 = document.getElementsByTagName("div")[0];
let myElement3 = document.getElementsByClassName("element")[0];

let myElement4 = document.querySelector("div");
let myElement5 = document.querySelector("#elzero");
let myElement6 = document.querySelector(".element");
let myElement7 = document.querySelector("[name='js' ]");

let myElement8 = document.querySelectorAll("div")[0];
let myElement9 = document.querySelectorAll("#elzero")[0];
let myElement10 = document.querySelectorAll(".element")[0];
let myElement11 = document.querySelectorAll("[name='js' ]")[0];

let myElement12 = document.body.children[0];
let myElement13 = document.body.childNodes[1];
let myElement14 = document.body.firstElementChild;

let myElement15 = document.getElementsByName("js")[0];
let myElement16 = document.body.children[0];
let myElement17 = document.documentElement.children[1].children[0];

//Assignment 2


for (let i = 0; i < 10; i++) {
  document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
}

// Assignment 3


// let input = document.querySelector("[name='dollar']");
// let result = document.getElementsByClassName("result");
let myInput = document.querySelector("[name='dollar']");
let myDiv = document.querySelector(".result");

// myInput.oninput = function (){
//   let inputValue = myInput.value;
//   let calc = (inputValue * 15.6).toFixed(2);
//   myDiv.textContent = `{${inputValue}} USD Dollar = {${calc} Egyptian Pound`;
// };

// Assignment 4 
let divOne = document.querySelector(".one");
let divTwo = document.getElementsByClassName("Two");
let tempText = divOne.innerText;
let tempTitle = divOne.title;
divOne.innerText = divTwo.innerText;
divOne.title = divTwo.title;
divTwo.innerText = tempText;
divTwo.title = tempTitle;
