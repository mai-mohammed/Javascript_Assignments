// Assignment 1

function getDetails(zName, zAge, zCountry) {
    function namePattern() {
      return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
    }
    function ageWithMessage() {
      return `${zAge.substr(0,2)}`;
    }
    function countryTwoLetters() {
      return `${zCountry.substr(0,2).toUpperCase()} `;
    }
    function fullDetails() {
      return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


// Assignment 2 

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe =  () =>  `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate =  (protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


//Assignment 3

let checker = (zName)=> (status)=> (salary)=>status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



// Assignment 4 


function specialMix(...data) {
  let sum = 0 ;
  let n = false ; 
  for(let i=0 ; i <data.length  ;  i++){
        if(!isNaN(parseInt(data[i]))){
          sum+=parseInt(data[i]);
          n= true; 
        }
        else {
          continue ;
        }
  }

  if(n==false){
    return "All Is Strings";
  }else{
    return  sum ;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
















