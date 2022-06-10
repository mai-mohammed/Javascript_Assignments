// Assignment 2

let addInput = document.querySelector(".classes-to-add");
let deleteInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title='Current']");
let classeDiv = document.querySelector(".classes-list div");

function show(){
    classeDiv.innerHTML = "";
    if(currentElement.classList.length !== 0 ){
        for(let i = 0  ; i<currentElement.classList.length ; i++){
           let span =  document.createElement("span");
           span.textContent= currentElement.classList[i];
           classeDiv.appendChild(span);
        }
    }else{
        let p = document.createElement("p");
        p.textContent ="No Classes To Show" ;
        classeDiv.appendChild(p);
    }
}
window.onload= show;

addInput.addEventListener("blur" , function(){
    if(addInput.value.trim()!== ""){
        let spiltValue = addInput.value.trim().toLowerCase().split(" ");
        spiltValue.forEach((ele)=>currentElement.classList.add(ele));
    }
    addInput.value="";
    show();
});

deleteInput.addEventListener("blur" , function(){
    if(deleteInput.value.trim()!== ""){
        let spiltValue = deleteInput.value.trim().toLowerCase().split(" ");
        spiltValue.forEach((ele)=>currentElement.classList.remove(ele));
    }
    deleteInput.value="";
    show();
});

// -----------------------------------------------------------------------------

// Assignment 3 
let target = document.querySelector(".our-element");
target.nextElementSibling.remove();

let firstDiv = document.createElement("div")
firstDiv.textContent = "Start"
firstDiv.className = "start"
firstDiv.setAttribute("title", "Start Element",)
firstDiv.setAttribute("data-value","Start")
target.before(firstDiv)

let secondDiv = document.createElement("div")
secondDiv.textContent = "End"
secondDiv.className = "end"
secondDiv.setAttribute("title", "end Element",)
secondDiv.setAttribute("data-value","end")
target.after(secondDiv);

// Assignment 4 
let handle = document.querySelector(".assign4 span");
 let result = handle.nextSibling.nextSibling ; 
console.log(result);

// Assignment 5 

document.addEventListener("click", function (e) {
    console.log(`This Is ${e.target.tagName}`) // = outerHTML but with full element
  });