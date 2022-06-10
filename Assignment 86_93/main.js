// Assignment 1
let assign = {};
assign[0] = document.getElementById("elzero");
assign[1] = document.getElementsByTagName("div")[0];
assign[2] = document.getElementsByClassName("element")[0];
assign[3] = document.getElementsByName("js")[0];

assign[4] = document.querySelector(".element");
assign[5] = document.querySelector("#elzero");
assign[6] = document.querySelector("div");
assign[7] = document.querySelector("[name = 'js']");

assign[8] = document.querySelectorAll("div")[0];
assign[9] = document.querySelectorAll("#elzero")[0];
assign[10] = document.querySelectorAll(".element")[0];
assign[11] = document.querySelectorAll("[name='js' ]")[0];

assign[12] = document.body.firstElementChild;
assign[13] = document.body.children[0];
assign[14] = document.body.childNodes[3];
assign[15] = document.documentElement.children[1].children[0];

for (let i = 0; i < 16; i++) {
  console.log(`${assign[i]}`);
}

// Assignment 2

let img = document.images;

for (let i = 0; i < 10; i++) {
  img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img[i].alt = "Elzero Logo";
}
// Assignment 3

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];
input.oninput = () => {
  let resultOutput = (input.value * 15.6).toFixed(2);
  result.textContent = `{${input.value}} USD Dollar = {${resultOutput} Egyptian Pound`;
};

// Assignment 4
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let tempTitle = one.title;
one.title = two.title;
two.title = tempTitle;

let tempText = one.textContent;
one.textContent = two.textContent;
two.textContent = tempText + " 2";

// Assignment 5

for (let i = 10; i < img.length; i++) {
  if (img[i].hasAttribute("alt")) {
    img[i].alt = "Old";
  } else {
    img[i].alt = "Elzero New";
  }
}


// Assignment 6 

// le

document.forms[1].onsubmit = function (e){
  e.preventDefault();

};