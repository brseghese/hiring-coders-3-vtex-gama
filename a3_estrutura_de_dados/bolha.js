let valores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
  let inicio = 0;
  let fim = 10;
  let tmp;

  for (let vezes = 0; vezes < 10; vezes++) {
    for (let pos = inicio; pos < fim - 1 - vezes; pos++) {
      // - vezes diminui pq o valor atual já foi para ultima posição
      if (valores[pos] > valores[pos + 1]) {
        tmp = valores[pos];
        valores[pos] = valores[pos + 1];
        valores[pos + 1] = tmp;
      }
    }
  }
}

ordena();
console.log("Vetor ordenado");
console.log(valores);
