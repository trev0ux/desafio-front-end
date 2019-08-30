function mudaDiv(el) {
  document.getElementsByClassName("item")[0].style.backgroundColor = el.checked ? "#FBFFFF" : "";
  document.getElementsByClassName("item")[0].style.border = el.checked ? "0.1111px solid #F0F0F0" : "";

}


function excluir(el) {
  var display = document.getElementById("list1").style.display;
  if (display == "none")
    document.getElementById("list1").style.display = 'block';
  else
    document.getElementById("list1").style.display = 'none';
}



function abrirModal(el) {
  document.getElementById('button').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
  });
}

function fecharModal(el) {
  document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
  });
}

function desativar(el){
//  document.getElementsByName('button-cancel').addEventListener.("click", function(){
//    document.getElementsByClassName("item")el.style.backgroundColor = "#707070";
//    document.getElementsByClassName("item")el.style.opacity = "1";

//  })
//}
