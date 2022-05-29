<h1 id="topo">React.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/15qogIQKXJf7fznQ5-BVDem_IZCPsuZVZ/view)
- [Create React App adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

---

<details>
<summary>Clique para Navegar 🔽</summary>

- <a href="#0">Introdução ao React.js</a> <br>
- <a href="#1">Preparando o ambiente do React.js</a> <br>
- <a href="#2">Fundamentos</a> <br>
- <a href="#3">Projeto - Search GitHub User</a> <br>

</details>

---

[![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.reactjs.org/)

<h3 id="0">📍​ Introdução ao React.js</h3>

[Tutorial: Introdução ao React](https://pt-br.reactjs.org/tutorial/tutorial.html)

- React é uma Lib para a criação de interfaces
- Utilizada para a construção de SPA (Single Page Applications)
- Podemos chamar de Framework, devido a seu ecossistema:
  - ReactJS
  - React Native
  - Redux
  - Webpack
  - Etc..
- Tudo fica dentro do JavaScript (elementos visuais, lógica e estilo)

Vantagens do React:

- Organização do código
  - Dividir nosso app/código em blocos específicos (componentização)
  - O funcionamento de um componente não interfere em outro
  - Se um componente é removido, o resto continua funcionando
- Divisão de responsabilidades
  - Back-end: Regras do negócio
  - Front-end: Interface
- Programação declarativa
  - Dizemos ao código o quê queremos, ele se encarrega do resto

Requisitos:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

---

<h3 id="1">🛠️​ Preparando o ambiente do React.js</h3>

[Create React App](https://create-react-app.dev/)

#### ✔️ Instalando

```
npx create-react-app nome_do_projeto
```

- Serão feitas todas as configurações necessárias
- O `npx` executa um comando de instalação de uma fonte externa

#### ✔️ Executando

```
cd nome_do_projeto
```

```
npm start
```

<h3 id="2">📘 Fundamentos</h3>

**Componentes / Components**

Componentes são conjuntos isolados de lógica (Javascript), visualização (JSX/HTML) e possível estilização (CSS).

São como funções JavaScript, aceitam entradas como propriedades (chamadas “props”) e retornam novos elementos React, os chamados JSX.

**JSX** é uma abstração que permite que você escreva uma sintaxe do tipo HTML em seu código JavaScript.

**Propriedades / Props**

Os props são argumentos que você passa para uma função ou classe. Como seus componentes são transformados em objetos semelhantes aos HTML pelo JSX, você passa os props como se fossem atributos do HTML. Diferente dos elementos HTML, você pode passar vários tipos de dados: strings, matrizes, etc...

**Estados / States**

O state é onde guardamos os dados do nosso componente.

Ele é gerenciado pelo React que determina a necessidade de cada componente ser renderizado novamente, ou seja, sempre que o nosso estado sofrer alguma alteração em uma informação utilizada dentro do método render nosso componente é montado novamente.

**Hooks** são funções que nos permitir utilizar estado, ciclo de vida, entre outras funcionalidades, sem a necessidade de escrevermos componentes com classe.

- useState

A função useState recebe por parâmetro o valor padrão do nosso estado e retorna o valor do estado em si e uma função que altera esse valor.

**Controlled Components**

O componente React que renderiza um formulário também controla o que acontece nesse formulário nas entradas subsequentes do usuário. Um input cujo o valor é controlado pelo React dessa maneira é chamado de “componente controlado” (controlled component).

**React Router Dom**

O react-router-dom é uma biblioteca padrão para que você consiga fazer o roteamento das páginas da sua aplicação de forma dinâmica.

<a href="#topo">🔝</a>

---

<h2 id="3"> Projeto - Search GitHub User 🔍​ </h2>

#### Continuação do Curso React.js. 🚀

[Clique aqui](https://github.com/brseghese/hc3-search-github-user)🔗 para acessar o repositório do projeto.

<a href="#topo">🔝</a>

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---
