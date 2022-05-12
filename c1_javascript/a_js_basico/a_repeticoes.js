let tabuada = 7;

for (let i = 0; i <= 10; i++) {
  console.log(`${tabuada} x ${i} = ${i * tabuada}`);
}

let achou = false;
let numeroSorteado = 10;
let possivelValor = 0;

while (!achou) {
  possivelValor += 1;
  if (numeroSorteado == possivelValor) {
    achou = true;
    console.log(
      `O valor ${possivelValor} corresponde ao valor sorteado ${numeroSorteado}`
    );
  } else {
    console.log(
      `Possivel Valor ${possivelValor} não corresponde ao numero sorteado ${numeroSorteado}`
    );
  }
}
