let elementos = [];
let topo = -1;
const MAX = 10;

function push(num) {
  if (topo < MAX) {
    topo = topo + 1;
    elementos[topo] = num;
  } else {
    console.log("Pilha cheia");
  }
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    topo = topo - 1;
    return num;
  } else {
    console.log("Pilha vazia");
  }
}

function estaVazia() {
  return topo == -1;
}

push(10);
push(20);
push(30);

console.log(elementos);

console.log(pop());
console.log(pop());
console.log(pop());

console.log(estaVazia());

// binario

/* 
10 / 2
 0   5  / 2 
     1    2 / 2
          0   1 / 2
              1   0

              10 = 1010 (binario) fraciona e inverte a ordem dos restos
*/

let numDecimal = 10;
let resto;

console.log("Empilhando");
while (numDecimal != 0) {
  resto = parseInt(numDecimal % 2);
  push(resto);
  console.log(resto);
  numDecimal = parseInt(numDecimal / 2);
}

console.log("Desempilhando");
while (!estaVazia()) {
  console.log(pop());
}

// a ordem empilhada é inversa no desempilhar
