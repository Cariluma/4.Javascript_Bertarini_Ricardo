/*Realiza una validación para la pantalla, en la que sólo se puedan mostrar
 8 dígitos. Si el número digitado, o el resultado de una operación posee
 un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.*/


var calculadora={
  numero1:2,
  numero2:2,
  resultado:10,
 suma:function(){
    var suma=(this.numero1+this.numero2);
    return suma;
  },
  resta:function(){
    var resta=(this.numero1-this.numero2);
    return resta;
  },
  multiplicacion:function(){
    var multiplicacion=(this.numero1*this.numero2);
    return multiplicacion;
  },
  division:function(){
    var division=(this.numero1/this.numero2);
    return division;
  }
};
