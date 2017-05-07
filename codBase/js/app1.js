var calculadora = (function(){
alert("Funciona");
numero = document.getElementById('display').innerHTML;
n = numero.length;
var num1 = "";
var num2 ="";
var resultado = "";
var operador = "";





document.getElementById('mas').addEventListener("click",function(){
  document.getElementById('mas').onmousedown=cambiomas;
  document.getElementById('mas').onmouseup=iniciomas;
  numero = document.getElementById('display').innerHTML;
  alert("numero"+numero);
  num1 = numero;
  alert(num1);
  operador = 1;
  alert("operador"+operador);
  document.getElementById('display').innerHTML="";

  });

  document.getElementById('igual').addEventListener("click",function(){
    document.getElementById('igual').onmousedown=cambioigual;
    document.getElementById('igual').onmouseup=inicioigual;
      numero = document.getElementById('display').innerHTML;
      alert(numero);
      num2 = numero;
      alert(num2);
      alert("operador"+operador);

    switch(operador){
    case 1:
    alert(num1);
    alert(num2);
    resultado = parseFloat(num1) + parseFloat(num2);
    alert(resultado);
    document.getElementById('display').innerHTML=resultado;
      break;
    case 2:
      resultado = num1 - num2;
      document.getElementById('display').innerHTML=resultado;
      alert(resultado);
      break;
    case 3:
      resultado = num1 * num2;
      document.getElementById('display').innerHTML=resultado;
      alert(resultado);
    case 4:
      resultado = num1 / num2;
      document.getElementById('display').innerHTML=resultado;
      alert(resultado);
    }
    });












document.getElementById("0").addEventListener("click",function(){
    document.getElementById('0').onmousedown=cambio0;
    document.getElementById('0').onmouseup=inicio0;
    numero = document.getElementById('display').innerHTML;
  if(numero!=0){
    document.getElementById("display").innerHTML+=0;
  }
});

document.getElementById('1').addEventListener("click",function(){
  document.getElementById('1').onmousedown=cambio1;
  document.getElementById('1').onmouseup=inicio1;
  numero = document.getElementById('display').innerHTML;
  n = numero.length;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=1;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=1;
        n = n + 1;
        alert(n);
      }
  });

  document.getElementById("2").addEventListener("click",function(){
  document.getElementById('2').onmousedown=cambio2;
  document.getElementById('2').onmouseup=inicio2;
  numero = document.getElementById('display').innerHTML;
   if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=2;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=2;
      n = n + 1;
    }
  });

document.getElementById("3").addEventListener("click",function(){
  document.getElementById('3').onmousedown=cambio3;
  document.getElementById('3').onmouseup=inicio3;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=3;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=3;
      n = n + 1;
    }
});

document.getElementById("4").addEventListener("click",function(){
  document.getElementById('4').onmousedown=cambio4;
  document.getElementById('4').onmouseup=inicio4;
  numero = document.getElementById('display').innerHTML;
   if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=4;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=4;
      n = n + 1;
    }
});

document.getElementById("5").addEventListener("click",function(){
  document.getElementById('5').onmousedown=cambio5;
  document.getElementById('5').onmouseup=inicio5;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=5;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=5;
      n = n + 1;
    }
});

document.getElementById("6").addEventListener("click",function(){
  document.getElementById('6').onmousedown=cambio6;
  document.getElementById('6').onmouseup=inicio6;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=6;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=6;
      n = n + 1;
    }
});

document.getElementById("7").addEventListener("click",function(){
  document.getElementById('7').onmousedown=cambio7;
  document.getElementById('7').onmouseup=inicio7;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=7;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=7;
      n = n + 1;
    }
});

document.getElementById("8").addEventListener("click",function(){
  document.getElementById('8').onmousedown=cambio8;
  document.getElementById('8').onmouseup=inicio8;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=8;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=8;
      n = n + 1;
    }
});

document.getElementById("9").addEventListener("click",function(){
  document.getElementById('9').onmousedown=cambio9;
  document.getElementById('9').onmouseup=inicio9;
  numero = document.getElementById('display').innerHTML;
    if (numero == 0 && numero != "0."){
      document.getElementById("display").innerHTML=9;
      n = n + 1;
    }else if (n < 9){
      document.getElementById("display").innerHTML+=9;
      n = n + 1;
    }
  });

  document.getElementById("punto").addEventListener("click",function(){
    numero = document.getElementById('display').innerHTML;
  if(numero.indexOf(".") < 1){
    document.getElementById("display").innerHTML+=".";
    n = n + 1;
  }
  });

  document.getElementById("on").addEventListener("click",function(){
    document.getElementById("display").innerHTML=display="0";
  });

  document.getElementById("sign").addEventListener("click",function(){
    numero = document.getElementById('display').innerHTML;
    alert(numero);
    document.getElementById("display").innerHTML=numero*(-1);
  });

function cambiomas(){
  document.getElementById('mas').style="width:90%;height:98%"
}
function cambioon(){
  document.getElementById('on').style="width:77.88px;height:59.90px"
}
function cambiosign(){
  document.getElementById('sign').style="width:77.88px;height:59.90px"
}
function cambioraiz(){
  document.getElementById('raiz').style="width:77.88px;height:59.90px"
}
function cambiodividido(){
  document.getElementById('dividido').style="width:77.88px;height:59.90px"
}
function cambiopor(){
  document.getElementById('por').style="width:77.88px;height:59.90px"
}
function cambiomenos(){
  document.getElementById('menos').style="width:77.88px;height:59.90px"
}
function cambiopunto(){
  document.getElementById('punto').style="width:77.88px;height:59.90px"
}
function cambioigual(){
  document.getElementById('igual').style="width:77.88px;height:59.90px"
}
function cambio1(){
  document.getElementById('1').style="width:77.88px;height:59.90px"
}
function cambio2(){
  document.getElementById('2').style="width:77.88px;height:59.90px"
}
function cambio3(){
  document.getElementById('3').style="width:77.88px;height:59.90px"
}
function cambio4(){
  document.getElementById('4').style="width:77.88px;height:59.90px"
}
function cambio5(){
  document.getElementById('5').style="width:77.88px;height:59.90px"
}
function cambio6(){
  document.getElementById('6').style="width:77.88px;height:59.90px"
}
function cambio7(){
  document.getElementById('7').style="width:77.88px;height:59.90px"
}
function cambio8(){
  document.getElementById('8').style="width:77.88px;height:59.90px"
}
function cambio9(){
  document.getElementById('9').style="width:77.88px;height:59.90px"
}
function cambio0(){
  document.getElementById('0').style="width:77.88px;height:59.90px"
}

function iniciomas(){
  document.getElementById('mas').style="width:90%;height:100%"
}
function inicioon(){
  document.getElementById('on').style="width:77.88px;height:62.90px"
}
function iniciosign(){
  document.getElementById('sign').style="width:77.88px;height:62.90px"
}
function inicioraiz(){
  document.getElementById('raiz').style="width:77.88px;height:62.90px"
}
function iniciodividido(){
  document.getElementById('dividido').style="width:77.88px;height:62.90px"
}
function iniciopor(){
  document.getElementById('por').style="width:77.88px;height:62.90px"
}
function iniciomenos(){
  document.getElementById('menos').style="width:77.88px;height:62.90px"
}
function iniciopunto(){
  document.getElementById('punto').style="width:77.88px;height:62.90px"
}
function inicioigual(){
  document.getElementById('igual').style="width:77.88px;height:62.90px"
}
function inicio1(){
  document.getElementById('1').style="width:77.88px;height:62.90px"
}
function inicio2(){
  document.getElementById('2').style="width:77.88px;height:62.90px"
}
function inicio3(){
  document.getElementById('3').style="width:77.88px;height:62.90px"
}
function inicio4(){
  document.getElementById('4').style="width:77.88px;height:62.90px"
}
function inicio5(){
  document.getElementById('5').style="width:77.88px;height:62.90px"
}
function inicio6(){
  document.getElementById('6').style="width:77.88px;height:62.90px"
}
function inicio7(){
  document.getElementById('7').style="width:77.88px;height:62.90px"
}
function inicio8(){
  document.getElementById('8').style="width:77.88px;height:62.90px"
}
function inicio9(){
  document.getElementById('9').style="width:77.88px;height:62.90px"
}
function inicio0(){
  document.getElementById('0').style="width:77.88px;height:62.90px"
}

document.getElementById('on').onmousedown=cambioon;
document.getElementById('on').onmouseup=inicioon;
document.getElementById('sign').onmousedown=cambiosign;
document.getElementById('sign').onmouseup=iniciosign;
document.getElementById('raiz').onmousedown=cambioraiz;
document.getElementById('raiz').onmouseup=inicioraiz;
document.getElementById('dividido').onmousedown=cambiodividido;
document.getElementById('dividido').onmouseup=iniciodividido;
document.getElementById('por').onmousedown=cambiopor;
document.getElementById('por').onmouseup=iniciopor;
document.getElementById('menos').onmousedown=cambiomenos;
document.getElementById('menos').onmouseup=iniciomenos;
document.getElementById('punto').onmousedown=cambiopunto;
document.getElementById('punto').onmouseup=iniciopunto;
document.getElementById('igual').onmousedown=cambioigual;
document.getElementById('igual').onmouseup=inicioigual;

})
calculadora();
