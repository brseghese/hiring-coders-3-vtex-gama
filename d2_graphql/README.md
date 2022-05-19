<h1 id="topo">GraphQL <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/vtex-hiring-coders-3)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/1TQIEiYUb1pxbE-_yoqPmqg25Ebpd_L9T/view)

---

[![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)

<details>
<summary>Clique para Navegar 🔽</summary>

◽ <a href="#0">O que é GraphQL</a> <br>
◽ <a href="#1">Iniciando o Projeto</a> <br>
◽ <a href="#2">Criando o Servidor</a> <br>
◽ <a href="#3">Configurando Porta e HostName</a> <br>
◽ <a href="#4">Criando Login</a> <br>

</details>

<h3 id="0">📍​ O que é GraphQL?</h3>

GraphQL é uma linguagem de consumo de grafos, onde você tem controle sobre os campos, as relações e os argumentos usados pra obtê-los. Mas não se resume a isso, também podemos fazer inserções e modificações usando a mesma sintaxe simples e intuitiva.

É uma query language para APIs. Podemos pensar no GraphQL como uma forma de desenvolver uma API orientado a tipos.

<h3 id="1">​🚀 Iniciando o Projeto - Client Service</h3>

Requisitos:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

Vamos criar um Módulo Node - toda apliação é um módulo Node, não necessariamente pacotes.

Iremos usar um Módulo chamado ESM (ECMAScript Modules) - é o sistema de módulo “mais novo” do Node.

⚡️ 1. Criar a pasta do projeto e inicializá-la como um módulo, digitando:

```
npm init
```

No entry point definir: "src/main.js" - arquivo principal do módulo.

No keywords, não é importante porque não é um pacote.

Com isso é criado o arquivo "package.json" e nele podemos automatizar o processo adicionado no objeto "scripts" a seguinte propriedade e valor:

```
  "start": "node -r esm ."
```

- -r é para rodar mais de um script
- esm
- "." é o nosso módulo / poderia ser "src/main.js"

Como não vamos lidar com pacotes e não vamos publicar, podemos setar ele como privado, incluindo a propriedade e valor "private: true", assim o npm não deixará publicá-lo.

⚡️ 2. Como vamos usar o ESM, vamos instalar ele, digitando:

```
npm i -D esm
```

- i = abreviação de install
- -D = abreviação --save-dev
- esm = ECMAScript Modules

O save-dev faz com que o módulo instalado seja uma dependência de desenvolvimento.

E o esm instala o (ESM) como dependência de desenvolvimento.

No package.json ele cria o objeto "devDependencies: esm"

⚡️ 3. Criamos nossa pasta e arquivo "src/main.js", no main.js colocamos um console.log("Hello!") para testar e digitamos no terminal:

```
npm run start
```

😎 <b>Ambiente Preparado!</b>

<a href="#topo">🔝</a>

---

<h3 id="2">🛠️ Criando o Servidor</h3>

No "main.js" importamos a função "createServer" do módulo "http" que é nativo do Node.js e serve para criar servidores.

Criamos a constante server para guardar a função e rertorná-la.

Executamos o servidor como o método "server.listen()", ou seja, colocamos ele para ouvir nossas requisições e tratar elas.

```
import { createServer } from "http";
const server = createServer();

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening at http://127.0.0.1:8000");
});
```

Esse método tem outras assinaturas, mas para este projeto receberá os seguintes argumentos:

- porta = 8000
- host name = 127.0.0.1 - é um ip (localhost)
- função = é executada assim que o server inicializa

No createServe ele recebe um callback que é para tratar as requisições.

Esse callback recebe dois objetos, o primeiro é o "request" e o segundo é o "response".

Roteamento é quando temos mais de uma forma de acessar um API.

O "request" dá um atributo que é a URL e é justamente esse roteamento.

Fazemos um switch case no "request" e se for verdadeiro o nome da rota ele irá retornar.

No caso vamos criar uma rota chamada "status", que irá dizer se a API está funcionado e vamos retornar.

Esse retorno é o objeto "response" que é tratado como um Buffer pelo Node, então temos que lidar com uma certa continuidade e tem uma ordem de uso (http):

- cabeçalho com código de status
- corpo da mensagem
- fechamento desse buffer de resposta

No switch definimos o default para qq endereço que não seja os "cases" retorne o erro 404.

```
const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200);
      response.write("Okay");
      response.end();
    }
    default: {
      response.writeHead(404, "Service not found");
      response.end();
    }
  }
});
```

😎 <b>Servidor criado com sucesso!</b>

<a href="#topo">🔝</a>

---

<h3 id="3">🚪 Configurando Porta e HostName</h3>

Para configurar usamos o objeto "process" que refere-se ao programa que está sendo executado e nele tem o atributo "env" que é um objeto com as variáveis de ambiente:

```
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
```

Testando a porta, digitar no terminal:

```
PORT=3000 npm run start
```

Para retornar um JSON da rota "status", no cabeçalho e corpo do "response" passamos parâmetros como objetos:

```
const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          status: "Okay",
        })
      );
      response.end();
      break;
    }
    default: {
      response.writeHead(404, "Service not found");
      response.end();
    }
  }
});
```

😎 <b>Porta e HostName configurados!</b>

<a href="#topo">🔝</a>

---

<h3 id="4">🔑 Criando Login</h3>
