    function executarExemplo() {
    // Chame a função exemplo com os parâmetros desejados
    var resultado = document.getElementById("entrada").value;
    // .value para pegar o valor do objeto
    var condicao ="10 9 8 7 6 5 4 3 2 1"
    // Exiba o resultado na página
    var outputDiv = document.getElementById("output");

    // Verificaçao de igualdade de sequencia
    if (condicao === resultado) {
      outputDiv.innerHTML = "Você terminou a sequência corretamente."
    } else {
      outputDiv.innerHTML = "Você errou a sequencia. "
    }
  }