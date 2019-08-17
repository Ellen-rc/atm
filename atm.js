let retirada = document.getElementById("num");
let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;

let limpar = document.getElementById("btn-limpar");
limpar.addEventListener("click", () => {
  num.value = "";
  withdraw.value = "";
});

function addValor(valor) {
  document.getElementById("num").value += valor;
  return valor;
}

const confirma = document.getElementById("btn-confirmar");
confirma.addEventListener("click", () => {
  let retirada = document.getElementById("num").value;
  let resultado = document.getElementById("withdraw");
  let totalNotas="";

  if (retirada == "") {
    resultado.value = "Erro de valor nulo!";
  } else if (retirada <= 0) {
    resultado.value = "Erro de valor inválido!";
  } else if (retirada % 10 != 0) {
    resultado.value = "Erro de notas indisponíveis!";
  } else {
      do{    
        if (retirada >= 100) {
            nota100 += 1;
            retirada = retirada - 100;
            totalNotas += " $ 100 " ;
            
        }else if (retirada >= 50) {
            nota50 += 1;
            retirada = retirada - 50; 
            totalNotas += " $ 50 ";
            
        }else if (retirada >= 20) {
            nota20 += 1;
            retirada = retirada - 20;
            totalNotas += " $ 20 ";
            
        } else {
            nota10 += 1;
            retirada = retirada - 10; 
            totalNotas += " $ 10 ";
        }
    }while (retirada > 0);
    resultado.value = totalNotas;
  }
})

