<h1 id="topo">Introdução ao Typescript <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="36px"/></h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/vtex-hiring-coders-3)

---

[![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<details>
<summary>Clique para Navegar 🔽</summary>

◽ <a href="#instalar">Como instalar o TypeScript?</a> <br>
◽ <a href="#tipos">Tipos</a> <br>

</details>

<h2>🚀Introdução</h2>

### 📍​ O que é TypeScript?

O TypeScript é um superset (camada extra) para potencializar o JavaScript.

O código TS é compilado e gera um código JS (exceção é o DENO).

<b>Quais problemas o TypeScript resolve?</b>

Um exemplo bem curto e fácil de lembrar é esse:

```
function soma (a, b) {
  return a + b;
}

console.log(soma(1, 1)) // 2
console.log(soma('1', '1')) // 11
```

Para resolver podemos aplicar validação estática de nossa tipagem e garantir que parâmetros, definições e retornos seguem uma determinada regra.

<b>Quais problemas o TypeScript traz?</b>

- Necessidade de um processo de buil/compilação
- Uma certa burocratização do desenvolvimento
- Mensagens de erro nem sempre muito claras
- Falta de embasamento em JS dependendo de como é estudado

<b>Devo sair tipando tudo?</b>

Não.

<b>O que é inferência?</b>

Inferir siginifica "deduzir" ou "concluir".

O compilador do TS é capaz de deduzir muitos tipos, que permite que o trabalho fique mais prático.

<h2 id="instalar">🛠️​ Como instalar o TypeScript?</h2>

Executando o código:

```
npm install --save-dev typescript
```

### 📍​ Vamos passo a passo:

⚡ 1. Digitar na pasta do projeto:

```
npm init -y
```

Criamos um pacote npm vazio, ou seja, somente um **package.json**.

⚡ 2. Na sequência instalamos o TS digitando:

```
npm i -D typescript
```

NPM é um gerenciador de pacotes.

O --save-dev significa que o pacote é uma dependência de desenvolvimento.

O install pode ser abreviado por i.

O --save-dev pode abreviar por -D.

⚡ 3. Na sequência configuramos nosso projeto em TS digitando:

```
npx tsc --init
```

O NPX é um executor.

O tsc --init acessa o binário do compilador do TS.

O npx verificará se o \<comando> ou o \<pacote> existe no $PATH ou nos arquivos binários do projeto local.

Se estiver, eles o executarão.

Depois de executado será criado o **tsconfig.json** que será usado para configurar o compilador do TS.

### 📍​ Montando uma estrutura Padrão de Projeto

Criamos uma pasta **src** onde ficarão nossos arquivos de TS e uma pasta **build** com os arquivos finais.

É comum ignorar a pasta build e node_modules no controle de versão e para isso criamos um arquivo **.gitignore** e dentro do arquivo escrevemos o nome das pastas ignoradas:

```
node_modules/
build/
```

No arquivo **tsconfig.json** vamos adiconar no objeto **compilerOptions** as seguintes chaves com os respectivos valores:

```
"outDir": "./build"
"rootDir": "./src"
```

Assim podemos criar um arquivo **exemplo.ts** na pasta **src** e o compilador criará um arquivo **exemplo.js** na pasta **build**.

### 📍​ Como executar de fato o compilador?

Executando no terminal:

```
npx tsc
```

⚡ Podemos automatizar essa execução.

No arquivo **package.json** criamos um script de build colocando no objeto **scripts** a seguinte chave e valor:

```
"build": "tsc"
```

⚡ E agora podemos executar no terminal:

```
npm run build
```

Nos bastidores será executado o compilador do TS.

<b>Fazendo testes!</b>

No arquivo **exemplo.ts** criamos a função soma tipando os parâmetros e na sequência chamando a função das duas formas, uma enviando number e outra enviando string e mesmo com o erro de tipagem foi gerado o arquivo **exemplo.js**.

Podemos resolver esse erro bloqueando nosso build:

No arquivo **tsconfig.json** adicionamos a seguinte chave e valor:

```
"noEmitOnError": true,
```

Assim não será gerado o arquivo **exemplo.js** com erro.

<a href="#topo">🔝</a>

---

<h2 id="tipos">🧰​​ Tipos</h2>

### 📍​ Tipos Básicos

- String
- Number
- Boolean
- Array
- Tupla
  - é um array com tamanho e tipo definidos
- Enum
  - é uma representação numérica de valor legível
  - diferente dos outros tipos ele gera um código javascript
- Any
  - é uma tipagem atribuída a qualquer valor que não esteja tipado
- Unknown
  - em casos específicos temos uma segurança melhor que o Any
- Null e Undefined
  - ambos são validados como false
  - os conceitos são diferentes
  - null é uma variável que tem o valor nulo
  - undefined são variáveis que foram criadas e não possuem valor atribuído
- Object

### 📍​ Tipos Compostos

Toda função do JS por padrão tem um retorno.

A linguagem JS é composto por uma <b>Pilha de Chamada</b> (call stack) onde cada função que executamos é empilhada nessa pilha e a cada vez que essas funções terminam de executar elas saem dessa pilha e as demais funções continuam seguindo seu fluxo.

Se a função não tem um retorno definido o retorno padrão é undefined. Esse é o comportametno padrão do JavaScript.

No TypeScript o compilador também consegue deduzir o tipo de retorno da nossa função.

### ✔️​ Void

É o tipo padrão das funções que não tem retorno ou quando queremos executar uma função e deixar explícito que a função não terá retorno.

### ✔️​ Never

É o tipo que determina que a função nunca retorne.

É usada em duas situações:

- Laços de repetição infinitos
- Funções que disparam erros

### ✔️​ Types Alias

É bem parecido com objeto, só que no lugar de chave e valor são campos e tipo do campo.

Ao declarar um objeto tipo Types Alias os valores das chaves ficam tipadas.

Podemos definir também campos opcionais adicionado ? apos o nome do campo.

### ✔️​ Union Types

É caracterizado com |, ele indica se o retorno será de um tipo ou de outro.

### ✔️​ Intersection Types

É caracterizado com & agrupando vários Types Alias.

---

### 📝​ Revisão

Tipos de função Void e Never.

Void são para tipos de função que não tem retorno explícito.

Never são para funções de laços de repetições ou para funções que disparam erros.

Type Alias que é a declaração de tipos, declarando os campos e os tipos do campos.

Uion Types que podemos garantir se o valor é de um tipo ou de outro tipo.

Intersection Types que podemos fazer a união dos nossos tipos.

Reforçando que podemos combinar todos eles.

E lembrando que podemos tipar as funções para retornar outros valores também.

<a href="#topo">🔝</a>

---
