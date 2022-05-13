function soma(a, b) {
  return a + b;
}

console.log(soma(3, 4));

const multiplicacao = function (a, b) {
  return a * b;
};

console.log(multiplicacao(5, 5));

// arrow function

const dividir = (a, b) => {
  return a / b;
};

console.log(dividir(10, 2));

const objeto = () => ({ nome: "Bruno", sobrenome: "Seghese" });
console.log(objeto);
