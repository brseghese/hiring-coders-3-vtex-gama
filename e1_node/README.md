<h1 id="topo">Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="30px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/16IyqLcI2XzUIHQlyk-fe0W__ZgZZS1UZ/view)

---

<details>
<summary>Clique para Navegar 🔽</summary>

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

- Criação: 2010
- Autor: Isaac Z. Schlueter
- Escrito em: JavaScript
- Motivo: "gerenciar pacotes no NodeJS era terrível"

</details>

<details>
<summary>Para que serve um pacote?</summary>

#### 🔶 Um pacote / módulo permite o compartilhar de funcionalidades implementadas entre diferentes projetos, pessoas e empresas.

</details>

<details>
<summary>Problemas que o NPM resolve</summary>

- Encontrar pacotes
- Mudanças de versão
- Atualização de segurança
- Descontinuidade dos pacotes
- Publicar pacotes
- Garantira segurança dos pacotes

</details>

<details>
<summary>Como funciona o NPM?</summary>

#### 🔶 Principais componentes:

- website
- cli
- registry

</details>

<details>
<summary></summary>

</details>
