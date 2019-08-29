function mudaDiv(el) {
  document.getElementsByClassName("item")[0].style.backgroundColor = el.checked ? "#FBFFFF" : "";
  document.getElementsByClassName("item")[0].style.border = el.checked ? "0.1111px solid #F0F0F0" : "";

}
document.getElementById('button').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});
