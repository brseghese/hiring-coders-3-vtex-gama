<h1 id="topo">Introdução ao Typescript</h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/vtex-hiring-coders-3)

---

[![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

<details>
<summary>Clique para Navegar 🔽</summary>

◻️​ <a href="#intro">Introdução</a>

- <a href="#instalar">Como instalar o TypeScript?</a>

◻️​ <a href="#tipos">Tipos Básicos</a>

</details>

<h2 id="intro">🚀Introdução</h2>

<h3>O que é TypeScript?</h3>

O TypeScript é um superset (camada extra) para potencializar o JavaScript.

O código TS é compilado e gera um código JS (exceção é o DENO).

<h3>Quais problemas o TypeScript resolve?</h3>

Um exemplo bem curto e fácil de lembrar é esse:

```
function soma (a, b) {
  return a + b;
}

console.log(soma(1, 1)) // 2
console.log(soma('1', '1')) // 11
```

Para resolver podemos aplicar validação estática de nossa tipagem e garantir que parâmetros, definições e retornos seguem uma determinada regra.

### Quais problemas o TypeScript traz?

- Necessidade de um processo de buil/compilação
- Uma certa burocratização do desenvolvimento
- Mensagens de erro nem sempre muito claras
- Falta de embasamento em JS dependendo de como é estudado

### Devo sair tipando tudo?

Não.

### O que é inferência?

Inferir siginifica "deduzir" ou "concluir".

O compilador do TS é capaz de deduzir muitos tipos, que permite que o trabalho fique mais prático.

<h3 id="instalar">🛠️​ Como instalar o TypeScript?</h3>

Executando o código:

```
npm install --save-dev typescript
```

### Vamos passo a passo:

Na pasta do projeto através do terminal:

```
npm init -y
```

Criamos um pacote npm vazio, ou seja, somente um **package.json** e em seguida instalamos o TS:

```
npm i -D typescript
```

> NPM é um gerenciador de pacotes
>
> **--save-dev** significa que o pacote é uma dependência de desenvolvimento
>
> O 'install' e o '--save-dev' pode ser encurtado para 'i' e '-D'

Ele será instalado como dependência de desenvolvimento.

Na sequência vamos iniciar as configurações do nosso projeto em TS digitando:

```
npx tsc --init
```

> NPX é um executor
>
> **tsc --init** acessa o binário do compilador do TS

O npx verificará se o \<comando> ou o \<pacote> existe no $PATH ou nos arquivos binários do projeto local.

Se estiver, eles o executarão.

Depois de executado será criado o **tsconfig.json** que será usado para configurar o compilador do TS.

### Montando uma estrutura de Projeto

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

Assim podemos criar um arquivo **exemplo.ts** na pasta **src** e o compilador criará um arquivo **exemplo.js** na pasta **build**

### Como executar de fato o compilador?

Executando no terminal:

```
npx tsc
```

Podemos automatizar essa execução:

No arquivo **package.json** criamos um script de build colocando no objeto **scripts** a seguinte chave e valor:

```
"build": "tsc"
```

E agora podemos executar no terminal:

```
npm run build
```

> De baixo dos panos irá executar o compilador do TS

### Fazendo testes

No arquivo **exemplo.ts** criamos a função soma tipando os parâmetros e na sequência chamando a função das duas formas, uma enviando number e outra enviando string e mesmo com o erro de tipagem foi gerado o arquivo **exemplo.js**.

Podemos resolver esse erro bloqueando nosso build:

No arquivo **tsconfig.json** adicionamos a seguinte chave e valor:

```
"noEmitOnError": true,
```

Assim não será gerado o arquivo **exemplo.js** com erro.

<a href="#topo">🔝</a>

---

<h2 id="tipos">Tipos Básicos</h2>
