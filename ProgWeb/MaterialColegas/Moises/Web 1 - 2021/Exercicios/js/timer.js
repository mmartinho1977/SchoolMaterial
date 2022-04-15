var time = document.querySelector("h1");
var btn_para = document.querySelector("button");

btn_para.addEventListener("click",
btnWork
);

var tempo = 0;

function btnWork(){
    if(btn_para.innerText=="Parar"){
        //clearInterval(incraseTime);
        btn_para.innerText="Continuar"
    }
    else{
        /*incraseTime = setInterval(
            TimePlus,
            1000 
        );*/
        btn_para.innerText="Parar"
    }
}


function TimePlus(){
    if(btn_para.innerText=="Parar"){
        tempo++;
        time.innerText = tempo;
    }

}

var incraseTime = setInterval(
    TimePlus,
    1000 
)

 /*setTimeout(
    ()=>{clearInterval(incraseTime)}
    ,5000
);*/
