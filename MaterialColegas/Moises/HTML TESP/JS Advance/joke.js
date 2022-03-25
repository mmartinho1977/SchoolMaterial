//var resP = document.getElementById("result");
var resP = $("#result");
var w = $("#wait");
var b = $("#b");

b.click(function() {
    ask();
  });;

  
$(function()
{
    ask();
});

function ask(){
    w.show();

    $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            //resP.innerText = res['value']
            resP.text(res['value']); 
            w.hide();
        }
    });
}