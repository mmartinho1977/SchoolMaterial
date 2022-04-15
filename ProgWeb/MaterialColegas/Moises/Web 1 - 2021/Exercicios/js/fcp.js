var principal  = document.getElementById('centroCima');
var allImg = document.querySelectorAll('img');


console.log(allImg);



Array.from(allImg).forEach(Element =>{
    Element.addEventListener("click", (e)=>{
        principal.src = e.target.src;
    });
});

/*function changeImg(e){
    principal.src = e.target.src;
}*/