const inquirer = require("inquirer");

let idade, qtAnos, qtMeses, qtDias, sobra;

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite a idade em dias: ",
    },
  ])
  .then((answers) => {
    idade = parseInt(answers.p1);

    qtAnos = parseInt(idade / 365);

    sobra = parseInt(idade % 365);

    qtMeses = parseInt(sobra / 30);

    qtDias = parseInt(sobra % 30);

    console.log(
      `Resultado: ${qtAnos} ano(s), ${qtMeses} mes(es), ${qtDias} dia(s)`
    );
  })
  .catch((err) => console.log(err));
