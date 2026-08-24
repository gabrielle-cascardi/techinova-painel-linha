// Alertas críticos - Linha 3

var limite = 90; // Futuramente mover para arquivo de configuração

function verificarAlerta(temperatura) {
  if (temperatura === undefined) {
    console.log("Erro: temperatura nao informada");
    return;
  }

  if (temperatura > limite) {
    console.log("ALERTA CRITICO NA LINHA 3");
    alert("ALERTA CRITICO NA LINHA 3");
  } else {
    console.log("Temperatura normal");
  }
}

var temperaturaAtual = 95;
verificarAlerta(temperaturaAtual);