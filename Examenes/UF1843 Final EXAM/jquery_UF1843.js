$(document).ready(function(){
// Uno
$( function() {
    $( "#avatar" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        duration: 1000
      }
    });
 
    $( "#uno" ).on( "click", function() {
      $( "#avatar" ).dialog( "open" );
    });
  } );

// Dos

$( function() {
    var state = true;
    $( "#dos" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      }
      state = !state;
    });
  } );

//   Tres

  $( function() {
    var state2 = true;
    $( "#tres" ).on( "click", function() {
  if ( state2 ) {
    $( "#effect2" ).animate({
      backgroundColor: "#964B00",
      color: "#000",
      width: 240
    }, 1000 );
    }
    state = !state;
    });
    } );

    // Cuatro

      $( function() {
        function hexFromRGB(r, g, b) {
          var hex = [
            r.toString( 16 ),
            g.toString( 16 ),
            b.toString( 16 )
          ];
          $.each( hex, function( nr, val ) {
            if ( val.length === 1 ) {
              hex[ nr ] = "0" + val;
            }
          });
          return hex.join( "" ).toUpperCase();
        }
        function refreshSwatch() {
          var red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );
          $( "#effect3" ).css( "background-color", "#" + hex );
        }
     
        $( "#red, #green, #blue" ).slider({
          orientation: "horizontal",
          range: "min",
          max: 255,
          value: 127,
          slide: refreshSwatch,
          change: refreshSwatch
        });
        $( "#red" ).slider( "value", 255 );
        $( "#green" ).slider( "value", 255 );
        $( "#blue" ).slider( "value", 255 );
      } );

      $("#cuatro").click(function(){
        $(".hid").toggle();
      });

  

    // Cinco

    $("#cinco").click(function(){
      $("div").toggle();
    });

    // Seis
    $("#seis").click(function(){
      $("#effect4").text("Cuando él miró hacia atrás y los vio, los maldijo en el nombre del Señor. Entonces salieron dos osas del bosque y despedazaron de ellos a cuarenta y dos muchachos.")
      $("#effect4").css("color", "red");
    })

    // Siete

    $("#siete").click(function(){
      $("body").css("background", "rgb(50, 50, 50)");
      $("header").css("background", "rgb(50, 50, 50)");
      $(".contenedor").css("background", "rgb(75, 75, 75)");
      $("button").css("background", "rgb(75, 75, 75)");
    })

    // Ocho

    $("#ocho").click(function(){
      $("#effect5").text(function(i, val) { return val*1+1 });
    })

    // Nueve
    $("#nueve").click(function(){
      $("body").css("fontSize", 24);
    })

  // Diez

  $("#diez").click(function(){
    $("main").css("background-image", "url(media/imagen-fondo.jpg)")
  })

  // Once

  $("#once").click(function() {
    $( "#effect6" ).effect( "shake" );
  });
  // Doce

  $("#doce").click(function(){
    var caja = $("#effect7")
    
    caja.animate({
      marginTop: "-675px",
      opacity: "0%"
      } , "slow")
      .animate({
        marginTop: "0px",
      } , "fast")
    })
})