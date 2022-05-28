<h1 id="topo">GraphQL <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/1TQIEiYUb1pxbE-_yoqPmqg25Ebpd_L9T/view)

---

[![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)

<details>
<summary>Clique para Navegar 🔽</summary>

◽ <a href="#1">Iniciando o Projeto</a> <br>
◽ <a href="#2">Criando o Servidor</a> <br>
◽ <a href="#3">Criando um tela de Login</a> <br>
◽ <a href="#4">Projeto Dev Demands</a> <br>

</details>

<h3 id="0">📍​ O que é GraphQL?</h3>

GraphQL é uma linguagem de consumo de graphos, onde você tem controle sobre os dados, as relações e os argumentos usados pra obtê-los.

Podemos fazer também inserções e modificações usando a mesma sintaxe simples e intuitiva.

É uma **Query Language** para APIs. Podemos pensar no GraphQL como uma forma de desenvolver uma API orientado a tipos.

---

<h3 id="1">​🚀 Iniciando o Projeto - Exemplo Cliente / Servidor</h3>

Este projeto é uma base para o próximo exercício - [Dev Demands](https://github.com/brseghese/vtex-hiring-coders-3-graphql-dev-demands)🔗 - onde entraremos de fato no assunto GraphQL.

Requisitos:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

#### ✔️ Criando módulo

Toda aplicação é um módulo Node.js e não necessariamente um pacote.

Usando o módulo **ESM** (ECMAScript Modules) - um sistema de módulo assíncrono e, portanto, oferece suporte a operações assíncronas ao carregar o módulo, enquanto o CJS é carregado de forma síncrona e, portanto, não tem suporte await.

#### ✔️ Inicializando o módulo

```
npm init
```

Um arquivo "package.json" é criado.

Definindo o arquivo principal do módulo:

```
"main": "src/main.js",
```

Removendo a propriedade keywords pois não estamos usando um pacote.

Automatizando o processo adicionando:

```
  "start": "node -r esm .",
```

- -r é para rodar mais de um script
- esm (ECMAScript Modules)
- "." é o nosso módulo / poderia ser "src/main.js"

Privando o pacote pois não iremos publicar:

```
"private: true",
```

#### ✔️ Instalando o ESM (ECMAScript Modules)

```
npm i -D esm
```

- i = abreviação de install
- -D = abreviação --save-dev (dependência de desenvolvimento)
- esm = ECMAScript Modules

#### ✔️ Testando o ambiente

```
npm run start
```

<a href="#topo">🔝</a>

---

<h3 id="2">🛠️ Criando o Servidor</h3>

Importando "createServer" do módulo "http" que é nativo do Node.js para criarmos o servidor.

Executando o servidor com o método "server.listen()" para ouvir as requisições e tratá-las.

Esse método tem outras assinaturas, mas para este projeto receberá os seguintes argumentos:

- porta = 8000
- HostName = 127.0.0.1 - IP (localhost)
- função (callback) = executa assim que o "server.listen()" inicializa

O "createServe()" recebe um callback que é para tratar as requisições.

Esse callback recebe dois objetos de parâmetros, o primeiro é o "request" e o segundo é o "response".

O "request" tem um atributo que é a URL e é justamente o roteamento.

Criando rota "status" que irá dizer se a API está funcionado e vamos retornar.

Fazemos um switch case no "request" e se for verdadeiro o nome da rota ele retorna.

Esse retorno é o objeto "response" que é tratado como um Buffer pelo Node.js, então temos que lidar com uma certa continuidade e tem uma ordem de uso (parecido com o http):

- cabeçalho com código de status
- corpo da mensagem
- fechamento desse buffer de resposta

Definindo um default no switch e se for passado um endereço que não seja os "cases" retornará o erro 404.

#### ✔️ Configurando Porta e HostName

Para configurar usamos o objeto "process" que se refere ao programa que está sendo executado e nele temos o atributo "env" que é um objeto com as variáveis de ambiente.

#### ✔️ Testando porta e HostName

```
PORT=3000 npm run start
```

No cabeçalho e corpo do "response" passamos o objeto como parâmetro.

Um JSON da rota "status" é retornado.

<a href="#topo">🔝</a>

---

<h3 id="3">💻 Criando uma tela de Login</h3>

Criando arquivo "sign-in.html" em "src/pages/".

Criando um "form" no HTML.

Definindo atributo "action" que é onde passamos a rota "/authenticate". e um atributo "method".

Definindo atributo "method" passando o valor "POST".

O "method" pode ser POST ou GET:

- POST - as informações não aparecem na URL
- GET - as informações aparecem na URL

Carregando o html no "main.js" importando um módulo nativo do Noje.js chamado "fs" (file system).

Esse módulo tem várias funções, iremos usar a função de ler arquivos assincronamente.

O Node.js foi criado com a premissa de "erro first callback", onde o primeiro argumento será um erro.

Criando o caminho do arquivo usando o módulo nativo do Node.js "path" e sua função "resolve".

Usando a função "readFile" no case "sign-in".

Passando o caminho "path" na função "readFile".

Tratando o atributo action="authenticate" do form para autenticar ao enviar os dados.

Em switch case "/authenticate" vamos tratar como um Buffer usando os eventos do request.

O retorno está encodado como "Query String" (parte da URL), para tratar isso vamos usar o módulo nativo do Node.js chamado "querystring" que vai prover uma função de "parse" para interpretá-la.

O retorno agora está formatado em um objeto e pode ser tratado conforme a necessidade.

No caso desse projeto iremos supor que o login e senha esteja certo e vamos usar o codígo 301 no response que é como vamos redirecionar o usuário com um cabeçalho de location e uma rota para "/home".

#### ✔️ Testando o Projeto Exemplo Cliente / Servidor

```
npm run start
```

Digite a URL do servidor + /sign-in.

Digite o email e senha.

Clique em enviar e o login será feito.

A página Home é exibida com sucesso!

<a href="#topo">🔝</a>

---

<h2 id="4"> Dev Demands 👨‍💻​ </h2>

#### Continuação do Curso GraphQL. 🚀

[Clique aqui](https://github.com/brseghese/vtex-hiring-coders-3-graphql-dev-demands)🔗 para acessar o repositório do projeto.

O desenvolvimento do projeto foi dividido:

- Back-end - Apollo Server GraphQL
- Front-end - React.js

O Back-end foi desenvolvido com toda a infraestrutura de dados em GraphQL manipulando um arquivo JSON.

O Front-end foi desenvolvido toda a interface em React.js para receber e editar os dados do Back-end.

<a href="#topo">🔝</a>

---
