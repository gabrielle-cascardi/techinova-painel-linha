// Alertas críticos - Linha 3

var limite = 90;

function verificarAlerta(temperatura) {
  if (temperatura > limite) {
    console.log("ALERTA CRITICO NA LINHA 3");
  } else {
    console.log("Temperatura normal");
  }
}

var temperaturaAtual = 95;
verificarAlerta(temperaturaAtual);