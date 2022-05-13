const textoNaoEstruturado = "Meu CPF é 287.166.728-44";

const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");

console.log(textoNaoEstruturado.match(regex)[0]);
