
    $( function() {
        $( "#saw" ).draggable({
            start: function(event, ui) { $(this).css("animation-duration","1s"); },
            stop: function(event, ui) { $(this).css("animation-duration","3s"); }
        }
        );
      } );

      $( "#tree" ).droppable({
        drop: function() {
     
        $( this ).hide();
      
        }
      });
   