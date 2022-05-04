const inquirer = require("inquirer");
let res;

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite o primeiro valor: ",
    },
    {
      name: "p2",
      message: "Digite o segundo valor: ",
    },
  ])
  .then((answers) => {
    res = parseInt(answers.p1) + parseInt(answers.p2);
    console.log(`Resultado da soma: ${res}`);
    res = parseInt(answers.p1) - parseInt(answers.p2);
    console.log(`Resultado da subtração: ${res}`);
    res = parseInt(answers.p1) * parseInt(answers.p2);
    console.log(`Resultado da multiplicação: ${res}`);
    res = parseInt(answers.p1) / parseInt(answers.p2);
    console.log(`Resultado da divisão: ${res}`);
    res = parseInt(answers.p1) % parseInt(answers.p2);
    console.log(`Resultado do resto da divisão: ${res}`);
  })
  .catch((err) => console.log(err));
