var b = "wow-1";
//var a = "Aceder fora e modificar dentro";

function base(){
    var a = "hello";
}
//console.log(a);
console.log(b);
///////////////////////////////////////////////////////////////////////
var remete = 10;

function remeteFunction(){
    var remete = "wow"
    console.log(remete);
}

function remeteAgainFunction(){
    var remete = "wow1"
    console.log(remete);
}

function remeteFinalFunction(){
    remete = "wow2"
    console.log(remete);
}
console.log(remete);
remeteFunction();
remeteFinalFunction();
remeteAgainFunction();

console.log(remete);


