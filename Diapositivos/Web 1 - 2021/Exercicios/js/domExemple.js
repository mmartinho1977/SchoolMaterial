var tx = document.getElementById("tex");
var btn = document.querySelector("button");

var tx1 = document.getElementsByClassName("hs1");
btn.addEventListener("click", mudaDeCor); //Neste caso nos estamos a criar um envento

function mudaDeCor(){
    tx1[2].style.color="pink";
    tx1[0].classList.add("red");
}

console.log(tx1[0].classList);


console.log("OLA");

console.log("OLe");

console.log("OLi");