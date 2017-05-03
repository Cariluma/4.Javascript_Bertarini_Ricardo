var calculadora = (function(num1, num2){
  var resultado = 0;

  function actualizarResultado(nuevoResultado){
    resultado = nuevoResultado
  }

  return{
    sumar: function(){
      var resultado = num1 + num2
      actualizarResultado(resultado)
    },
    restar: function(){
      var resultado = num1 - num2
      actualizarResultado(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarResultado(resultado)
    },
    dividir: function(){
      var resultado = num1 / num2
      actualizarResultado(resultado)
    },
    resultado: function(){
      return resultado
    }
  }
})
calculadora(1,2);

/////////////////////////////////////
var display = document.getElementById("display")
var operandos = {
operador: "",
operadorAnt: "",
numAnt: 0
}
var calculadora = {
init: function(){
var self = this
var cero = document.getElementById("0")
var uno = document.getElementById("1")
var dos = document.getElementById("2")
var tres = document.getElementById("3")
var cuatro = document.getElementById("4")
var cinco = document.getElementById("5")
var seis = document.getElementById("6")
var siete = document.getElementById("7")
var ocho = document.getElementById("8")
var nueve = document.getElementById("9")
var punto = document.getElementById("punto")
var on = document.getElementById("on")
var sign = document.getElementById("sign")
var raiz = document.getElementById("raiz")
var div = document.getElementById("dividido")
var por = document.getElementById("por")
var menos = document.getElementById("menos")
var mas = document.getElementById("mas")
var igual = document.getElementById("igual")
cero.addEventListener("click",function(){
self.numero("0")
})
cero.addEventListener("mousedown", function(){
cero.setAttribute("style","transform:scale(0.95,0.95)")
})
cero.addEventListener("mouseout", function(){
cero.setAttribute("style","transform:scale(1,1)")
})
uno.addEventListener("click",function(){
self.numero("1")
})
uno.addEventListener("mousedown",function(){
uno.setAttribute("style","transform:scale(0.95,0.95)")
})
uno.addEventListener("mouseout",function(){
uno.setAttribute("style","transform:scale(1,1)")
})

dos.addEventListener("click", function(){
self.numero("2")
})
dos.addEventListener("mousedown",function(){
dos.setAttribute("style","transform:scale(0.95,0.95)")
})
dos.addEventListener("mouseout",function(){
dos.setAttribute("style","transform:scale(1,1)")
})
/*Realiza una validación para la pantalla, en la que sólo se puedan mostrar
 8 dígitos. Si el número digitado, o el resultado de una operación posee
 un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.*/
