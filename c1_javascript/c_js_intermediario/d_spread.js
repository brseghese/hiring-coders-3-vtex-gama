let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] >= listaIncluir[i]) {
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

console.log(lista);

// spread

const listaResult = [1, 2, ...listaIncluir, 5];
console.log(listaResult);

let arr = ["a", "b", "c"];
// let arr2 = arr; faz referência

let arr2 = [...arr];

arr2.push("d");

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
