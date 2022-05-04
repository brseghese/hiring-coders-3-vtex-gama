const inquirer = require("inquirer");

let num, contador, resultado;

inquirer
  .prompt([
    {
      name: "p1",
      message: "Digite um número: ",
    },
  ])
  .then((answers) => {
    num = +answers.p1;
    for (contador = 0; contador <= 10; contador++) {
      resultado = num * contador;
      console.log(`${num} x ${contador} = ${resultado}`);
    }

    contador = 0;

    while (contador <= 10) {
      resultado = num * contador;
      console.log(`${num} x ${contador} = ${resultado}`);
      contador++;
    }
  })
  .catch((err) => console.log(err));
