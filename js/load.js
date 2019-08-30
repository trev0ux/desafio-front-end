function lista() {

  var saida = '';

  var lista = [];

  $.getJSON("assets/tasks.json", function(data) {
      lista = data.lista;

      for (i = 0; i < lista.length; i++) {
        saida += lista[i].title;
      }

      document.getElementById('item').innerHTML = saida;
  });
}
