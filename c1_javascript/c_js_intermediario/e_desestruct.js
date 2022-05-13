const pessoa = {
  nome: "Bruno",
  sobrenome: "Seghese",
  idade: 41,
  profissao: "Developer",
};

console.log(pessoa);

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
console.log(`${nome} ${sobrenome} ${idade} ${profissao}`); */

// desestruct
let { nome, sobrenome, idade, profissao } = pessoa;
console.log(nome, sobrenome, idade, profissao);
