var btn = document.createElement("button");
btn.innerHTML = "ADD TO LIST";

var input = document.createElement("input");
var listHolder = document.createElement("ul");
var v  = document.createElement("li");

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(listHolder);

btn.addEventListener("click",addToList);

function addToList(){
    var f= v.cloneNode("true");
    f.innerHTML=input.value;
   listHolder.appendChild(f);
}