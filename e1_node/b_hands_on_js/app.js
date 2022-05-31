const http = require("http");
const url = require("url");
const queryString = require("query-string");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  let resposta;
  const urlparse = url.parse(req.url, true);
  // Receber informacoes de um usuario
  const params = queryString.parse(urlparse.search);

  // Criar um usuario - Atualizar um usuario
  if (urlparse.pathname == "/criar-atualizar-usuario") {
    // Salvar as informacoes
    fs.writeFile(
      "users/" + params.id + ".txt",
      JSON.stringify(params),
      function (err) {
        console.log("Saved!");

        resposta = "Usuario criado / atualizado com sucesso!";

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(resposta);
      }
    );
  }
  // Selecionar um usuario
  else if (urlparse.pathname == "/selecionar-usuario") {
    fs.readFile("users/" + params.id + ".txt", function (err, data) {
      resposta = err ? "Usuario nao encontrado!" : data;

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(resposta);
    });
  }
  // Remover um usuario
  else if (urlparse.pathname == "/remover-usuario") {
    fs.unlink("users/" + params.id + ".txt", function (err) {
      console.log("File deleted!");

      resposta = err ? "Usuario nao encontrado!" : "Usuario removido!";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(resposta);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:3000/criar-atualizar-usuario?nome=bruno&idade=41&id=1
// localhost:3000/criar-atualizar-usuario?nome=bruno&idade=41&id=1
// localhost:3000/selecionar-usuario?id=1
// localhost:3000/remover-usuario?id=1
