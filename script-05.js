function realizarOperacao(operacao){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var resultado;
  
  switch(operacao) {
  case 'soma':
    // code block
    resultado = a + b;
    break;
  case 'subtracao':
    // code block
    resultado = a - b;
    break;
  case 'multiplicacao':
    // code block
    resultado = a * b;
    break;
  case 'divisao':
    // code block
    resultado = a / b;
    break;
  case 'potenciacao':
    // code block
    resultado = a ** b;
    break;
  default:
    // code block
}
if (operacao == 'soma'){
  resultado = a + b;
}else if(operacao == 'subtração'){
  resultado = a - b
}else if(operacao == 'mutiplicação'){
  resultado = a * b
}else if(operacao == 'divisão'){
  resultado = a / b}

 document.getElementById('demo').innerHTML = resultado;

}