// Incluindo um biblioteca
const http = require("http");
const url = require("url");
const queryString = require("query-string");

// Definição de endereço / URL
const hostname = "127.0.0.1"; // localhost
const port = 3000;

// Implementação da Regra de Negócio
const server = http.createServer((req, res) => {
  // Pegar a pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search);

  // Verificar a pergunta e escolher uma resposta
  let resposta;
  if (params.pergunta == "melhor-filme") {
    resposta = "Star Wars";
  } else if (params.pergunta == "melhor-tecnologia") {
    resposta = "Node.js";
  } else {
    resposta = "Não sei, desculpe :(";
  }

  // Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(resposta);
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
