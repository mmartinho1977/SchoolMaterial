var most = document.getElementById("mostrador");

 var listBtn = document.querySelectorAll("input");

 var expressao = "";
 console.log(listBtn);

Array.from(listBtn).forEach(element => {
     console.log(element.value);
     element.addEventListener("click", AddORresolve)
 });

 function AddORresolve(ev){
    if( ev.target.value !== "="){
        expressao = expressao+  ev.target.value;
    }else{
        expressao = eval(expressao);
    }
    
    most.innerText = expressao;
 }