var calculadora = (function(){
alert("Funciona");

function cambioteclamas(){
  document.getElementById('mas').style="width:90%;height:98%"
}
function teclainiciomas(){
  document.getElementById('mas').style="width:90%;height:100%"
}

document.getElementById('mas').onmousedown=cambioteclamas;
document.getElementById('mas').onmouseup=teclainiciomas;
})
calculadora();
