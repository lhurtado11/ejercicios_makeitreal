$(document).ready(function() {
    //Declarar variables reutilizables
    var input = $("#input");
  
    //Evento keyup
    input.keyup(function() {
     
        $('h1').html("Hola "+input.val() + "!"); //agregamos en contenido
  
      //Podemos verificar si está vacio el input
      if (input.val() === "") {
        contenido.html("¿Cómo te llamas?");
      }
    });
  });