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


/*Realiza una validación para la pantalla, en la que sólo se puedan mostrar
 8 dígitos. Si el número digitado, o el resultado de una operación posee
 un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.*/
