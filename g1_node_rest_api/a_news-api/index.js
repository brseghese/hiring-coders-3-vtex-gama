// Inclusao dos pacotes
const express = require("express");
const mysql = require("mysql2");

// Instacia o express
const app = express();

// Definicao de porta
const port = 3000;

// Abrindo conexao com base de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Blev3879@",
  database: "sistema_noticias",
});

connection.connect();

// Servico de Hello World
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Servico de busca de categorias
app.get("/news-api/v1/categorias", (req, res) => {
  // Busca categorias
  connection.query(
    "SELECT id, nome FROM sistema_noticias.categoria",
    (err, rows, fields) => {
      if (err) throw err;

      res.send(rows);
    }
  );
});

// Servico de busca de noticias
app.get("/news-api/v1/categorias/:categoriaId/noticias", (req, res) => {
  // Busca noticias de uma categoria
  connection.query(
    "SELECT id, titulo FROM sistema_noticias.noticia where id_categoria = " +
      req.params.categoriaId,
    (err, rows, fields) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

// Servico de busca de uma noticia
app.get(
  "/news-api/v1/categorias/:categoriaId/noticias/:noticiaId",
  (req, res) => {
    // Busca noticia
    connection.query(
      "SELECT id, titulo, conteudo FROM sistema_noticias.noticia where id_categoria = " +
        req.params.categoriaId +
        " AND id = " +
        req.params.noticiaId,
      (err, rows, fields) => {
        if (err) throw err;
        res.send(rows[0]);
      }
    );
  }
);

// Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
