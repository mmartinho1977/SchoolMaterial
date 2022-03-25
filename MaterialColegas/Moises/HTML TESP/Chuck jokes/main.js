$(function(){ 
    pedido();
});

function pedido(){
    $("#espera").show();
      $.ajax({
                url: "https://api.chucknorris.io/jokes/random",
                type: 'GET',
                dataType: 'json', // added data type
                success: function(res) {
                        $("#piada").text(res['value']);
                        $("#espera").hide();
                }
            });
}