var gP = document.getElementById("grandParent");
var p =document.getElementById("parent");
var c =document.getElementById("child");

var count = 0;

//gP.addEventListener("click",b);
gP.addEventListener("click", showGP,{capture:true} ); // {once:true}
p.addEventListener("click", showP);
c.addEventListener("click", showC,  {capture:true} );



function showGP(){
    console.log("GP foi clicado");
    if(count==3){
        gP.removeEventListener("click",showGP, {capture:true});
    }
    count++;
}
function showP(e){
    console.log("P foi clicado");
    //e.stopPropagation();
}
function showC(){
    console.log("C foi clicado");
}

/*(e)=>{console.log(e)}*/


//document.addEventListener("click", ()=>{console.log("HELOOO")});

var p = document.querySelectorAll("div");
/*Array.from(p).forEach(element => {
    element.addEventListener("click", ()=>{console.log("HELOOO")});
});*/

document.body.addEventListener("click",(e)=>{
        if(e.target.matches("div")){
            e.target.addEventListener("click", ()=>{console.log("HELOOO")});
        }
})


var f = document.createElement("div");
f.style.height="60px";
f.style.width="60px";
f.style.backgroundColor="Green";
//f.addEventListener("click", ()=>{console.log("HELOOO")});
document.body.appendChild(f);
