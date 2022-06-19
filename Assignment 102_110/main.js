// Assignment  1 

let input = window.prompt("Print Number From - To");
let range = input.split("-");

for ( let i= +(range[0]) ; i <= +(range[1]) ; i++){
    console.log(i);
}

// Assignment 2 

const pop = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector(".close");

setTimeout(function(){
    pop.classList.add("active");
    overlay.classList.add("active");
} , 5000);
closeBtn.addEventListener("click" , ()=>{
    pop.classList.remove("active");
    overlay.classList.remove("active");
}); 


// Assignment 3 

let countdown = document.querySelector(".countdown");

let counter = setInterval(function(){
    if(countdown.innerHTML === "0"){
        clearInterval(counter);
    }else{
        countdown.innerHTML -=1 ;
    }
} , 1000);


// Assignment 4

let countdown2 = document.querySelector(".countdown2");

let counter2 = setInterval(function(){
    if(countdown.innerHTML === "0"){
        clearInterval(counter);
        // location.href = "https://elzero.org/" ;
    }else{
        countdown2.innerHTML -=1 ;
    }
} , 1000);

// Assignment 4

let countdown3 = document.querySelector(".countdown3");

let counter3 = setInterval(function(){
    if(countdown.innerHTML === "5"){
        window.open("https://elzero.org" , "_blank" , "width=500,height=500,top=0,left =500" );
    }
    if(countdown.innerHTML === "0"){
        clearInterval(counter);
    }else{
        countdown3.innerHTML -=1 ;
    }
} , 1000);