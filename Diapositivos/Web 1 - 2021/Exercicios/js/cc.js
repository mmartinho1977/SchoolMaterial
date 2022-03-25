//vars 
var expression = "";

var screenToshow = document.getElementById("mostrador");




//Escrever resolução
function resolveEquation(){
    expression = eval(expression);
    screenToshow.value= expression;
}

function addToExpression(ev){
    expression += ev.target.value;    
    screenToshow.value= expression;
}

var bT2 = document.getElementById("bT2");

bT2.addEventListener("click",addToExpression)