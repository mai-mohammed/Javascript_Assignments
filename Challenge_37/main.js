// if challenge
let a = 10;
a < 10
  ? console.log(10)
  : a >= 40 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log(">40")
  : console.log("Unknown");

//Assignment 2
let st = "Elzero Web School";
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

if (st.charAt(st.indexOf("W")) === "W") {
  console.log("Good");
}

if (st !== "string") {
  //we can take substring
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
