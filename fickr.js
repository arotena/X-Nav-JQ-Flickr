$( document ).ready(function() {

  $("#boton").click(function(){
      var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?"
      $("#doc").empty();
      $.getJSON( url, function( data ) {
  			$.each( data.items, function( key, foto) {
            $( "<h1>" ).html(foto.title).appendTo( "#doc" );
  			    $( "<img>" ).attr( "src", foto.media.m ).appendTo( "#doc" );
  			});
		  });
    });
    $("#elegir").click(function(){
        var elegido = $("#buscar").val();
        $("#doc").empty();
      	var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + elegido + "&tagmode=any&format=json&jsoncallback=?"
        $.getJSON( url, function( data ) {
    			$.each( data.items, function( key, foto) {
              $( "<h1>" ).html(foto.title).appendTo( "#doc" );
    			    $( "<img>" ).attr( "src", foto.media.m ).appendTo( "#doc" );
    			  });
  		  });
    });
});
