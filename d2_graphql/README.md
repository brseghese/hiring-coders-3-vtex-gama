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
◽ <a href="#4">Criando um tela de Login</a> <br>

</details>

<h3 id="0">📍​ O que é GraphQL?</h3>

GraphQL é uma linguagem de consumo de grafos, onde você tem controle sobre os campos, as relações e os argumentos usados pra obtê-los. Mas não se resume a isso, também podemos fazer inserções e modificações usando a mesma sintaxe simples e intuitiva.

É uma **Query Language** para APIs. Podemos pensar no GraphQL como uma forma de desenvolver uma API orientado a tipos.

---

<h3 id="1">​🚀 Iniciando o Projeto - Cliente / Servidor</h3>

Requisitos:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

Passo a passo:

Vamos criar um módulo Node.js - toda aplicação é um módulo Node.js e não necessariamente pacotes.

Iremos usar um módulo chamado **ESM** (ECMAScript Modules) - é o sistema de módulos “mais novo” do Node.js.

⚡️ 1. Criar a pasta do projeto e inicializar como um módulo, digitando:

```
npm init
```

Um arquivo "package.json" é criado.

Setar na propriedade (entry point) "main" o valor: "src/main.js" definindo o arquivo como principal do módulo.

A propriedade keywords neste caso não é importante porque não é um pacote.

Automatizar o processo adicionado no objeto "scripts" a seguinte propriedade e valor:

```
  "start": "node -r esm ."
```

- -r é para rodar mais de um script
- esm
- "." é o nosso módulo / poderia ser "src/main.js"

Incluir a propriedade e valor "private: true" pois não teremos pacotes e nem vamos publicar.

⚡️ 2. Instalar o ESM, digitando:

```
npm i -D esm
```

- i = abreviação de install
- -D = abreviação --save-dev
- esm = ECMAScript Modules

O save-dev faz com que o módulo instalado seja uma dependência de desenvolvimento.

O esm instala o (ESM) como dependência de desenvolvimento.

O objeto "devDependencies: esm" é criado no "package.json".

⚡️ 3. Criar a pasta e arquivo "src/main.js", um console.log("Hello") para teste e digitar:

```
npm run start
```

Ambiente preparado com sucesso!

<a href="#topo">🔝</a>

---

<h3 id="2">🛠️ Criando o Servidor</h3>

Em "main.js" importar a função "createServer" do módulo "http" que é nativo do Node.js para criar o servidor.

Criar uma "const server" para armazenar a função e rertorná-la.

Executar o servidor com o método "server.listen()" para ouvir as requisições e tratá-las.

Esse método tem outras assinaturas, mas para este projeto receberá os seguintes argumentos:

- porta = 8000
- host name = 127.0.0.1 - IP (localhost)
- função (callback) = executa assim que o "server.listen()" inicializa

```
import { createServer } from "http";
const server = createServer();

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening at http://127.0.0.1:8000");
});
```

O "createServe()" recebe um callback que é para tratar as requisições.

Esse callback recebe dois objetos de parâmetros, o primeiro é o "request" e o segundo é o "response".

Roteamento é quando temos mais de uma forma de acessar um API.

O "request" dá um atributo que é a URL e é justamente esse roteamento.

Fazemos um switch case no "request" e se for verdadeiro o nome da rota ele irá retornar.

No caso estamos criando uma rota chamada "status", que irá dizer se a API está funcionado e vamos retornar.

Esse retorno é o objeto "response" que é tratado como um Buffer pelo Node.js, então temos que lidar com uma certa continuidade e tem uma ordem de uso (parecido com o http):

- cabeçalho com código de status
- corpo da mensagem
- fechamento desse buffer de resposta

Definimos um default no switch e se for passado um endereço que não seja os "cases" retorne o erro 404.

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

Servidor criado com sucesso!

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

Testando a porta, digitando:

```
PORT=3000 npm run start
```

Para retornar um JSON da rota "status", no cabeçalho e corpo do "response" passamos os seguintes parâmetros como objetos:

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

Porta e HostName configurados!

<a href="#topo">🔝</a>

---

<h3 id="4">🔑 Criando uma tela de Login</h3>

Em "src" criamos uma pasta "pages" e nela um arquivo "sign-in.html".

Criamos um "form" com um atributo "action" que é onde passamos a rota e um atributo "method".

O "method" pode ser POST ou GET:

- POST - as informações não aparecem na URL
- GET - as informações aparecem na URL

Em "action" definimos o valor "/authenticate e em "method" o valor "POST".

Criamos as labes, inputs e button.

Em "main.js" adicionamos dois switch case:

- sign-in
- authenticate

Para carregar o html no "main.js" importamos um módulo nativo do Noje.js chamado "fs" (file system).

Esse módulo tem várias funções, vamos usar uma que é de ler arquivo assincronamente (padrão).

```
import { readFile } from "fs";
```

O Node.js foi criado com a premissa de "erro first callback", onde o primeiro argumento será um erro.

Usando a função "readFile" no case "sign-in":

```
readFile((error, file) => {
  if (error) {
    response.writeHead(500, "Can't process HTML file");
    response.end();
    return;
  }
  response.writeHead(200);
  response.write(file);
  response.end();
});
```

Precisamos agora criar o caminho do arquivo e para isso vamos usar um outro módulo nativo do Node.js o "path" e sua função "resolve".

```
import { resolve } from "path";
```

Criamos uma constante para o caminho:

```
const path = resolve(__dirname, "./pages/sign-in.html");
```

Passamos a constante "path" na função "readFile":

```
readFile(path, (error, file) => {...}
```

Iniciar o servidor, passar o caminho e HTML carregado!

Autenticando ao enviar os dados, para isso precisamos tratar o atributo action="authenticate" do form.
