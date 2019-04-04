$("#boton-usuarios").on("click", getUsers); //Convertir datos en string de consulta.

function getUsers() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
    success: function(respuesta) {

      var listaUsuarios = $("#lista-usuarios");
      $.each(respuesta, function(index, elemento) {
        listaUsuarios.append(
            '<div>'
      +     '<p>' + "Nombre: " + elemento.name + '</p>'
		  +     '<p>' + "Email: " + elemento.email + '</p>'
     
          + '</div>'
        );    
      });
    },
    error: function() {
      console.log("ERROR. No se ha podido obtener la información");
    }
  });
}