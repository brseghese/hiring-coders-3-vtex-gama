<h1 id="topo">Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/1D27vmgiuuz4mg5HPLquFFHu7XAxMDDm1/view)

---

[![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

<details>
<summary>Tópicos | Conteúdos  | Recursos</summary>

####

- Conceitos de REST e SOAP
- Configurando Nodemon
- Configurando Docker
- Configurando ElephantSQL e PostBird
- ORM Migration
- Usuários Model
- Usuários Controller
- Usuários Hash de senhas
- Usuários Autenticação JWT
- Token JWT via Header
- Atualizando usuário
- Validação de dados
- Adicionando foto do usuário
- Vinculando fotos ao usuário
- Listagem de prestadores de serviços
- Models de agendamento
- Criando agendamentos
- Validações e listagem de agendamentos
- Paginação e listagem de agenda do colaborador
- Configurando o MONGODB
- Configurando as notificações
- Listando notificações e marcando como lidas

</details>

---

<h3 id="0">📍 Conceitos de REST e SOAP </h3>

REST (Representational State Transfer) é um protocolo de comunicação, baseado no protocolo de hipermídia HTTP. Porém ele não impõe restrições ao formato da mensagem, apenas no comportamento dos componentes envolvidos. A maior vantagem do protocolo REST é sua flexibilidade.

SOAP (Simple Object Access Protocol) é um protocolo baseado em XML para troca de informações em um ambiente distribuido. É utilizado para troca de mensagens entre aplicativos distribuidos pela rede. Estes aplicativos, ou “Web services”, possuem uma interface de acesso simples e bem definida.

---

<h3 id="3"> Sistema de Agendamento 📖​ </h3>

#### Cadastro e autenticação de Usuários.

#### Cadastro e listagem de Agendamentos.

[Clique aqui](https://github.com/brseghese/hc3-sistema-agenda)🔗 para acessar o repositório do projeto. 🚀

---

### 🛠️ Preparação do Ambiente

<details>
<summary>Iniciando módulo e instalando Express</summary>

#### ✔️ Inicialize o pacote

```
npm init -y
```

> -y criar sem perguntas

O arquivo "package.json" é criado.

#### ✔️ Crie a pasta "src" com os respectivos arquivos

- app.js
- server.js
- routes.js

#### ✔️ Instale o express

```
npm i express
```

</details>

<details>
<summary>Criando estrutura básica da API REST</summary>

#### 🔶 server.js

```
const app = require("./app");

app.listen(3333);
```

#### 🔶 app.js

```
const express = require("express");
const routes = require("./router");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
```

#### 🔶 router.js

```
const { Router } = require("express");
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Okay" });
});

module.exports = routes;
```

#### ✔️ Teste o servidor

```
node src/server.js
```

#### ✔️ Abra o navegador e digite

```
localhost:3333
```

</details>

<details>
<summary>Instalando Sucrase e Nodemon</summary>

#### 🔶 Sucrase

O Sucrase possibilita o node usar a sintaxe ES6 modules, melhorando a compatibilidade de código do frontend com o backend.

#### ✔️ Instale o [sucrase](https://github.com/alangpierce/sucrase)

```
npm i sucrase -D
```

> -D dependência de desenvolvimento

#### 🔶 Nodemon

O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor.

#### ✔️ Instale o nodemon

```
npm i nodemon -D
```

> -D dependência de desenvolvimento

#### ✔️ Configure o nodemon

Crie o arquivo "nodemon.json" na pasta raiz e implemente:

```
{
  "execMap": {
    "js": "sucrase-node"
  }
}
```

Inclua no "package.json" na propriedade "scripts"

```
"dev": "nodemon src/server"
```

Atualize as importações dos arquivos:

- server.js
- app.js
- router.js

#### ✔️ Teste o servidor

```
npm run dev
```

> digite localhost:3333 no navegador

</details>

<details>
<summary>Instalando Docker e PostgreSQL</summary>

#### 🔶 Docker

O Docker é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado.

#### ✔️ Faça o download, instale e configure o Docker

[Get Started Docker](https://www.docker.com/)

#### ✔️ Verifique o a versão do Docker

```
docker -v
```

#### 🔶 PostgreSQL

O PostgreSQL suporta nativamente um grande número de tipos de dados padrão, como JSON, XML, etc. O PostgreSQL obtém vantagem disso, pois é um dos poucos bancos de dados relacionais que oferece forte suporte para a funcionalidade NoSQL. Além disso, permite que os usuários definam seus próprios tipos de dados.

#### ✔️ Instale o Postgre

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

#### ✔️ Verifique as imagens instaladas no docker

```
docker image ls
```

No app Docker em images postgres clicar em "run"

#### ✔️ Teste o Postgres

```
docker ps
```

</details>

<details>
<summary>Instalando ORM Sequelize</summary>

#### 🔶 ORM

Object-Relational Mapping (ORM), em português, mapeamento objeto-relacional, é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.

#### 🔶 Sequelize

O Sequelize é um ORM(Object/Relational Mapper) baseado em Promise para Node.js e io.js, e suporta os dialetos PostgreSQL, MySQL, MariaDB, SQLite e MSSQL e recursos a transação, relacionamentos, replicação de leitura e muito mais.

#### ✔️ Instale o Sequelize

```
npm i sequelize
```

#### ✔️ Instale o CLI do Sequelize

```
npm install --save-dev sequelize-cli
```

#### ✔️ Instale o conector do banco de dados PostgreSQL

```
npm i pg pg-hstore
```

#### ✔️ Crie o arquivo ".sequelizerc na pasta raiz

Após implementar "config/database.js" e ".sequelizerc"

#### ✔️ Create Migration

```
npx sequelize migration:create --name=create-users
```

#### 🔶 Migration

É uma forma de versionar o schema de sua aplicação. Migrations trabalha na manipulação da base de dados: criando, alterando ou removendo. Uma forma de controlar as alterações do seu banco juntamente com o versionamento de sua aplicação e compartilhar-la.

</details>

<a href="#topo">🔝</a>

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---

<!-- <details>
<summary></summary>

</details> -->
