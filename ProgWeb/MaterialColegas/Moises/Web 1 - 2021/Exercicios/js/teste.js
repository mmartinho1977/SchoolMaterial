var num = prompt ("Escreva um numero");
while (!Number(num)){
    num = prompt ("Escreva um numero"); 
}


var sinal = prompt ("Escreva um sinal");
var num2 = prompt ("Escreva outro numero");
var conta = (num + sinal + num2);
var resultado = eval (conta);


alert("Resultado "+ resultado);



/*var expressao = prompt ("Escreva a conta");
alert (eval(expressao));*/





