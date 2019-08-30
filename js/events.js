//marcar div ao selecionar checkbox //

function selectDiv(el) {
  document.getElementsByClassName("item")[0].style.backgroundColor = el.checked ? "#FBFFFF" : "";
  document.getElementsByClassName("item")[0].style.border = el.checked ? "0.1111px solid #F0F0F0" : "";

}

//excluir div ou tarefa completa //

function excluir(el) {
  var display = document.getElementById("list1").style.display;
  if (display == "none")
    document.getElementById("list1").style.display = 'block';
  else
    document.getElementById("list1").style.display = 'none';
}

//abrir modal//

function abrirModal(el) {
  document.getElementById('button').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
  });
}

//fechar modal //

function fecharModal(el) {
  document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
  });
}

//desabilitar checkbox

function desativar(el){
  document.getElementById('check1').disabled = true;
}
//ativar o checkbox//

function ativar(el) {
  document.getElementById('check5').disabled = false;
}
