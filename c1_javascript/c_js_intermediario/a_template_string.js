let meuNome = "Bruno";
let meuSobrenome = "Seghese";
let minhaProfissao = "Web Developer";

// sem template string
console.log(
  "Olá, eu sou " +
    meuNome +
    " " +
    meuSobrenome +
    " e minha profissão é " +
    minhaProfissao +
    "!"
);

// com template string
console.log(
  `Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}!`
);
console.log(`A soma de 1 + 1 é ${1 + 1}`);
console.log(`O objeto json ${{ chave: "valor" }}`);

meuObjeto = {
  chave: "valor",
};
console.log(meuObjeto);
