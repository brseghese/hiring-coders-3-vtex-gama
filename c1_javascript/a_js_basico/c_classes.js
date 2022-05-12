class Matematica {
  soma(a, b) {
    return a + b;
  }
  subtracao(a, b) {
    return a - b;
  }
}

let instanciaMatematica = new Matematica();
let resultadoSoma = instanciaMatematica.soma(4, 7);
console.log(resultadoSoma);
let resultadoSubtracao = instanciaMatematica.subtracao(7, 4);
console.log(resultadoSubtracao);
