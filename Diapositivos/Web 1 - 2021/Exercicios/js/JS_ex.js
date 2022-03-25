var n = 4;
var s ="Isto é uma string";
var s2 ="4";
var nd;
var nul = null;
var bool = true;


console.log("NUMBER ",n);
console.log("String ",s);
console.log("Não defenidos ",nd);
console.log("nulos ",nul);
console.log("bool ",bool);

//////////////////////////////Funções nativas /////////////////////
//alert(), eval() , console.log

//((((((((((((((((((functions))))))))))))))))))
function isMenorde16 (idade){

    if(idade < 16 ){
        return true;
    }
    else{
        return false;
    }
}

var isMenor18 = (idade) => {
    if(idade < 18 ){
        return true;
    }
    else{
        return false;
    }
}

/////////////////////////ARRAY//////////////////////////
var ar = ["gato", "cao", "coelho"];
ar.push("Lagarto");


ar.forEach(element => {
    console.log(element);
});

var i;

for( i=0 ; i < ar.length ; i++ ){
    console.log(ar[i]);
}
 
i = 0;
while(i < ar.length){
    console.log(ar[i]);
    i++;
}

