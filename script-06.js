function usoLoop(){
  let text = "";
  let i = 0;
  while (i <= 50) {
    text += "<br>O número é " + ((2*1)+1);
    i++;
  }
  document.getElementById("demo").innerHTML = text;
}

function usoFor(){
  let text = "";
   
  for (let i = 9; i > -1; i--) {
    text += "<br>0 número é " + i;
  }
 
  document.getElementById("demo").innerHTML = text;
}

function limpar(){
  document.getElementById("demo").innerHTML = "";

}
