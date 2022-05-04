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
    for (contador = 1; contador <= num; contador++) {
      if (contador % 2 == 0) {
        resultado = contador * contador;
        console.log(`${contador} ^ 2 = ${resultado}`);
      }
    }

    // mais eficiente
    for (contador = 2; contador <= num; contador = contador + 2) {
      console.log(`${contador} ^ 2 = ${contador * contador}`);
    }
  })
  .catch((err) => console.log(err));
