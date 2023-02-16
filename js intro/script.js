// console.log("First program");
// console.log(document.body.style.background= "red");
// window.setTimeout(function(){
//     document.body.style.background = "blue";
//     window.alert("Hello");
// }, 5000);

// window.setInterval(function(){
//     document.body.innerHTML =`<h1>${new Date()}</h1> `;
//     //console.log(new Date())
// }, 1000);

// const result = window.confirm("Are you sure?");
// console.log(result);
// const prom1 = window.prompt("Are you sure?");
// console.log(prom1);

//JS SELCETOR
 var title = document.getElementById("title");
title.style.fontSize="100px";

var list = document.getElementsByClassName("red");
list[0].style.fontSize="60px";

var firstList = document.querySelectorAll(".red");
firstList.forEach(function(item){
    item.style.color = 'red';
});

//Events
// document.addEventListener("click", function(){
//     console.log("You pressed")
// });

// const button = document.querySelector('button');
// button.addEventListener("click", function(){
//     console.log(event.target);
//     document.body.style.background = "purple";
// });

const button = document.querySelector('button');
document.addEventListener("keyup", function (event){
    console.log(event);
    document.body.style.background = "purple";
});

