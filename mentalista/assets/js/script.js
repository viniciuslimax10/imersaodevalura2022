
var numeroSecreto,tentativas=0;
var adivinharBtn = document.getElementById("adivinhar");
var reiniciarBtn = document.getElementById("reiniciar");
function reiniciar(){
     numeroSecreto = parseInt(Math.random() * 11);
     tentativas=0;
     adivinharBtn.disabled=false;
     reiniciarBtn.style.display='none';
}
reiniciar();
function adivinhar() {
  var elementoResultado = document.getElementById("resultado");
  
  
  var adivinhar = parseInt(document.getElementById("valor").value);
  console.log(adivinhar);
  if (adivinhar == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (adivinhar > 10 || adivinhar < 0 || isNaN(adivinhar)) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    tentativas++;
    if(tentativas >=3 ){
        elementoResultado.innerHTML = "Você errou, o número que eu estava pensando era:"+numeroSecreto ;
        adivinharBtn.disabled=true;
        reiniciarBtn.style.display='inline';
        console.log(tentativas);
    }else
    {
        elementoResultado.innerHTML = "Errou";
    }
    
  }
}
