const inquirer = require("inquirer");

let nota1, nota2, media;

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite a nota 1: ",
    },
    {
      name: "p2",
      message: "Digite a nota 2: ",
    },
  ])
  .then((answers) => {
    nota1 = +answers.p1;
    nota2 = +answers.p2;
    media = (nota1 + nota2) / 2;
    console.log(`A média é: ${media}`);
    if (media >= 7) {
      console.log("Aprovado!");
    } else {
      console.log("Reprovado!");
    }
    console.log("Fim!");

    if (media >= 9 && media <= 10) {
      console.log("Conceito A");
    } else if (media >= 8 && media < 9) {
      console.log("Conceito B");
    } else if (media >= 7 && media < 8) {
      console.log("Conceito C");
    } else if (media >= 6 && media < 7) {
      console.log("Conceito D");
    } else if (media >= 5 && media < 6) {
      console.log("Conceito E");
    } else {
      console.log("Conceito R");
    }
  })
  .catch((err) => console.log(err));
