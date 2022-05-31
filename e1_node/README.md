<h1 id="topo">Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/16IyqLcI2XzUIHQlyk-fe0W__ZgZZS1UZ/view)

---

<details>
<summary>Clique para Navegar 🔽</summary>

####

- <a href="#0">O que é Node.js?</a>
- <a href="#1">O que é NPM?</a>
- <a href="#2">Noções de JavaScript</a>
- <a href="#3">Noções de TypeScript</a>

</details>

---

[![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

<h3 id="0">📍 O que é Node.js?</h3>

O Node tornou possível a utilização de uma única linguagem (JavaScript) para desenvolvimento do backend e do frontend.

<details>
<summary>História do Node</summary>

####

- Surgimento: 2009
- Autor: Ryan Dahl
- Engine: Chromium V8 Engine
- Escrito em: C, C++ e JavaScript
- Linguagens suportadas: JavaScript e TypeScript
- Motivo de surgimento: insatisfação com o Apache

</details>

<details>
<summary>Conceito e Benefícios</summary>

#### 🔶 Definição de Node

Node (ou formalmente Node.js) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em JavaScript.

Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor).

Como tal, o ambiente omite APIs JavaScript especificas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos.

#### 🔶 Benefícios do Node

Performance excelente. Node foi projetado para otimizar a taxa de transferência e a escalabilidade em aplicações web. É uma ótima combinação para resolver muitos problemas comuns no desenvolvimento da web (por exemplo, aplicações em tempo real).

O código é escrito em "JavaScript". Isso significa menos tempo gasto para lidar com mudanças de código entre navegador e servidor web, não sendo necessária uma mudança na linguagem.

JavaScript é uma linguagem de programação relativamente nova e apresenta algumas vantagens quando comparadas a outras linguagens tradicionais de servidor (por exemplo Python, PHP, etc.).

Muitas outras linguagens novas e populares compilam/convertem em JavaScript, permitindo que você também use essas linguagens, como TypeScript, CoffeeScript, ClosureScript, Scala, LiveScript, etc.

O Gerenciador de Pacotes do Node (NPM, na sigla em inglês) provê acesso a centenas de milhares
de pacotes reutilizáveis.

NPM possui a melhor coleção de dependências e também pode ser usado para automatizar a maior parte da cadeia de ferramentas de compilação.

É portátil, com versões para diferentes sistemas operacionais, como Microsoft Windows, OSX, Linux,
Solaris, FreeBSD, OpenBSD, WebOSeNonStop. Além disso, tem excelente suporte de muitos provedores de hospedagem na web, que muitas vezes fornecem documentação e infraestrutura específica para hospedar sites desenvolvidos em Node.

Possui uma comunidade de desenvolvedores e um ecossistema muito ativo, com muitas pessoas
dispostas a ajudar.

</details>

<details>
<summary>Fundamentos Client / Server</summary>

#### 🔶 Servidor x Cliente

#### ✔️ Servidor

- Somente responde requisições / pedidos
- Armazena dados
- Tem grande poder de processamento
- Está sob a governança da empresa
- Atende vários clientes
- Maior impacto de segurança

#### ✔️ Cliente

- Envia requisições / pedidos
- Normalmente não armazena dados
- Tem baixo poder de processamento
- Está soba a guarda do cliente
- Atende somente um cliente
- Menor impacto de segurança

#### 🔶 Server-side x Client-side

#### ✔️ Server-side

- Tudo que roda no servidor
  - Banco de dados
  - Programas node.js
  - E-mails
  - Imagens

#### ✔️ Client-side

- Tudo que roda no cliente

  - Navegadores
  - Aplicativos
  - Programas instalados

#### 🔶 Evolução do client-side

- computadores pessoais mais potentes
- surgimento dos smartphones
- evolução dos navegadores

#### ✔️ Servidor

- Responsável pelo gerenciamento dos dados
- Responsável pelas regras de negócio
- Responsável pela lógica de programação "pesada"
- Mais generalista e reaproveitável

#### ✔️ Cliente

- Responsável pela geração do HTML
- Responsável pela lógica de usabilidade
- Responsável pela lógica de programação "leve"
- Inicialmente específico
  - Com os frameworks mais generalista e reaproveitável

#### 🔶 Ambientes client-side

- Navegadores
  - JavaScript
- Android
  - Kotlin
- iOS
  - Swift

#### 🔶 Backend x Frontend

#### ✔️ Backend

- Servidor
- Server-side

#### ✔️ Frontend

- Cliente
- Client-side

</details>

<details>
<summary>Guia de Introdução</summary>

#### <a href="https://nodejs.org/en/docs/guides/getting-started-guide/" target="_blank">🔶 Getting Started Guide</a> 🔗

Crie o arquivo "app.js", copie o código do guia e cole no arquivo.

#### ✔️ Execute o app.js

No terminal, digite na pasta do arquivo:

```
node app.js
```

Abra o navegador e digite:

```
http://127.0.0.1:3000/
```

> // Hello World

</details>

<details>
<summary>Documentações</summary>

####

- Documentação Oficial do [Node.js](https://nodejs.org/en/docs/)
- [DevDocs](https://devdocs.io/node/)
- [Stack Overflow](https://stackoverflow.com/)

</details>

<a href="#topo">🔝</a>

---

<h3 id="1">📍​ O que é NPM?</h3>

NPM é o gerenciador de pacotes do Node permitindo a busca, instalação, gerenciamento criação e publicação de pacotes.

<details>
<summary>História do NPM</summary>

####

- Criação: 2010
- Autor: Isaac Z. Schlueter
- Escrito em: JavaScript
- Motivo: "gerenciar pacotes no NodeJS era terrível"

</details>

<details>
<summary>O que é um Pacote / Módulo?</summary>

#### 🔶 Pacote / Módulo

Permite o compartilhar de funcionalidades implementadas entre diferentes projetos, pessoas e empresas.

</details>

<details>
<summary>Problemas que o NPM resolve</summary>

####

- Encontrar pacotes
- Mudanças de versão
- Atualização de segurança
- Descontinuidade dos pacotes
- Publicar pacotes
- Garantira segurança dos pacotes

</details>

<details>
<summary>Componentes do NPM</summary>

#### 🔶 Principais componentes:

✔️ Website

- Endereço: [www.npmjs.com](https://www.npmjs.com/)
- Utilidades:
  - Documentação de apoio
  - Busca de pacotes

✔️ CLI

- Nome: Command line interface
- Utilidades:
  - Instalar pacotes
  - Desinstalar pacotes
  - Atualizar pacotes
  - [E muito mais](https://docs.npmjs.com/cli/v7/commands)

✔️ Registry

- Endereço: [docs.npmjs.com](https://docs.npmjs.com/)
- Utilidades:
  - Armazenar todos os pacotes disponíveis no NPM
  - Acesso: através do NPM CLI

</details>

<details>
<summary>Como o NPM funciona?</summary>

#### 🔶 Passo a passo:

- Pesquise no site do NPM o pacote desejado
- Inclua o nome do pacote no seu arquivo `package.json`
- Instale o pacote:

```
npm install
```

</details>

<details>
<summary>Colocando em Prática o NPM</summary>

#### 🔶 Novo Projeto

Normalmente quando começamos um novo projeto Node, configuramos o npm. Porque além de trazer pacotes, ele também permite criarmos os nossos pacotes para publicar.

#### 🔶 Novo Pacote

✔️ Na pasta do projeto, para criar um novo pacote digite:

```
npm init
```

✔️ Criando um novo pacote são feitas as perguntas:

- Nome do pacote
- A versão
- A descrição
- Entry Point (arquivo principal)
- Comando de teste
- Repositório Git
- Keywords (palavras chaves)
- autor
- licença

✔️ Dentro do projeto é criado um arquivo "package.json", que é o arquivo onde o NPM armazena os pacotes que ele instala dentro do projeto.

</details>

<a href="#topo">🔝</a>

---

<h3 id="2">📍​ Noções de JavaScript</h3>

JavaScript é uma linguagem de programação que permite o desenvolvimento de programas frontend, ela é carregada quando uma página web é acessada e o navegador é o responsável pela sua execução.

Seu objetivo **inicial** era dar "vida" às páginas web, tornar o frontend mais "inteligente" e diminuir as interações com o backend / servidor.

<details>
<summary>História do JavaScript</summary>

####

- Criação: 1995 (LiveScript)
- Autor: Netscape
- Evolução:
  - Firefox (2004)
  - Chrome (2008)

</details>

<details>
<summary>Hands-on</summary>

#### 🔶 Projeto CRUD por URL

- Criar Usuário
- Atualizar Usuário
- Selecionar Usuário
- Remover Usuário

#### ✔️ Passar os dados por URL

- Pacote `url` (nativo do Node)
  - Seleciona a string após o parâmetro `?` da URL
- Pacote `query-string` (NPM install)
  - Transforma o parâmetro após `?` em objeto
- Usa-se o `&` para a concatenação de parâmetros

#### ✔️ Manipular arquivos

- Pacote `fs` (NPM install)
  - [w3schools/fs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

> Função Callback, é uma função que é chamada depois que é executada alguma coisa para o Node fazer.

</details>

[MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/web/javascript)

<a href="#topo">🔝</a>

---

<h3 id="3">📍​ Noções de TypeScript</h3>

<details>
<summary>Hands-on</summary>

#### 🔶 Projeto

- Criar Usuário
- Atualizar Usuário
- Selecionar Usuário - desafio
- Remover Usuário - desafio

#### 🔶 Instalando e Configurando o TypeScript

#### ✔️ Inicializar um pacote npm:

```
npm init
```

#### ✔️ Instalar o módulo TypeScript

```
npm i typescript
```

#### ✔️ Iniciar o gerenciador TypeScript

```
npx tsc --init
```

Criar uma pasta "dist" na pasta do projeto.

O arquivo "tsconfig.json" é criado. Ele é o arquivo de configuração do TypeScript.

#### ✔️ Configurar o "tsconfig.json" ativando 2 propriedades

```
"rootDir": "./"

"outDir": "./dist/"
```

#### ✔️ Iniciar a Compilação em tempo real

```
npx tsc --watch
```

Parar a compilação - ctrl + enter

#### ✔️ Instalando complemento dos módulos padrões do Node

```
npm install @types/node
```

#### ✔️ Instalando o pacote Query String que não é padrão

```
npm i query-string
```

#### ✔️ Executando o Servidor

```
node dist/index.js
```

</details>

[TypeScript](https://www.typescriptlang.org/)

<a href="#topo">🔝</a>

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---
