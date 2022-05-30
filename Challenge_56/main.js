/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed","Mai", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer","Mohammed", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let numAdmins = 0 ;
for(let i = 0 ; myAdmins[i]!="Stop" ; i++ ){
  numAdmins++;
}

document.write(`<div>We Have ${numAdmins} Admins</div>`);

for(let i=0 ; i<numAdmins ;i++){
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]} `);
  document.write(`<h3>Team Members:</h1>`);
  for(let j = 0 , c=1 ; j <myEmployees.length ; j++){
    if(myEmployees[j][0] === myAdmins[i][0]){
      document.write(`<p> -${c} ${myEmployees[j]}`);
      c++;
    }
  }
}