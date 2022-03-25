var beyblade = document.getElementById("Q");


var move = 0;
var movUp = 0;
document.addEventListener("keydown", function(e){
    console.log(e);
    moveBy(e);

})

function moveBy(e){
    if(e.which=="68"){ //Mover em direita
        move++;
        beyblade.style.marginLeft = move+"px";
    }
    if(e.which=="97"){ //Mover em esquerda
        beyblade.style.marginLeft = -move+"px";
    }
    if(e.which=="65"){ //Mover em cima
        beyblade.style.marginTop = movUp+"px";
    }
    if(e.which=="83"){ //Mover em baixo
        beyblade.style.marginTop = -movUp+"px";
    }
}