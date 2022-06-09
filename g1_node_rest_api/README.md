<h1 id="topo">Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="30px"/> Criando uma REST API</h1>

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

<h3> 📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/1wuiyTk3gXT4LApRJJqFxRPkZy4YhXuwe/view)

---

<details>

<summary>Clique para Navegar 🔽</summary>

- <a href="#0">RESTful API</a>
- <a href="#1">Swagger</a>
- <a href="#2">Postman</a>
- <a href="#3">Express</a>
- <a href="#4">Hands On</a>

</details>

---

[![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

<h3 id="0"> 🔶​ RESTful API</h3>

<details>

<summary>Conceito e Denfinição</summary>

#### 🔷 API

Uma API é uma aplicação que permite a integração entre diferentes sistemas padronizando o fluxo de requisições, a forma de envio e recebimento de informações e oprotocolo de codificação das mensagens.

#### 🔷 REST

O REST é um conjunto de convenções arquiteturais que utiliza algumas camadas do HTTP para envio e recebimento de informações.

#### 🔷 REST API

Logo, uma REST API é uma API que permite a integração entre sistemas utilizando as convenções arquiteturais do REST.

#### 🔷 RESTful

É um sistema que segue todas as boas práticas do estilo de arquitetura REST.

Isso envolve seguir padrões para definição de recursos, status de resposta, cache, codificação dos dados, forma de envio e de recebimento, entre outras coisas.

O RESTful traz um foco no consumidor, que no caso, é o desenvolvedor.

</details>

<details>

<summary>Exemplos e Links de RESTful APIs</summary>

#### 🔷 Exemplos de REST API

- [Youtube](https://developers.google.com/youtube/v3)🔗
- [Instagram](https://developers.facebook.com/docs/instagram-api/)🔗 Graph API
- [Any API](https://any-api.com/)🔗

</details>

<details>

<summary>Recursos de uma API</summary>

#### 🔷 Definição de Recursos | Case: Portal de Notícias

- /categorias
- /jornalistas

> Recursos de um portal de notícias - ex: G1.com

#### 🔷 Definição de Coleção

- /categorias

> Coleção de categorias - ex: esportes, políticas...

- /categorias/{categorias_id}/noticias

> Coleção de notícias - ex: jogos de futebol

#### 🔷 Definição de Elemento

- /categorias/{categoria_id}

> Elemento de uma categoria específica - ex: esporte

#### 🔷 Definição de Sub-elemento

- /categorias/{categoria_id}/noticias/{noticia_id}

> Elemento de uma notícia específica, dentro de uma categoria - ex: jogo do palmeiras

#### ⚠️ Evite encadeamentos maiores que esses três níveis:

- Coleção -> acessa o site "G1" (categorias)
- Elemento -> acessa uma seção "Esportes" (categorias/{}/noticias)
- Sub-elemento -> acessa uma notícia "Jogo do Palmeiras" (categorias/{}/noticias/{}noticia)

</details>

<details>

<summary>Endpoint</summary>

#### 🔷 Definição de Endpoint

Os principais dados necessários para um sistema se comunicar com uma API são:

- Protocolo:HTTP/HTTPS
- Host:api.sistemanoticias.com.br
- Path:/categorias/1/noticias

Endpoint é a junção de todas essas informações, ou seja, ele é o endereço específico de determinado recurso na API.

#### 🔷 Estrutura Recomendada

protocolo://dominio/nome-da-api/versao/recurso

> ex: https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias/12

</details>

<details>

<summary>Métodos / Verbos REST</summary>

#### 🔷 CRUD

- GET
  - Envio de parâmetros via URL
  - Recebimento de informações no corpo da resposta
- POST
  - Envio de parâmetros via corpo
  - Recebimento de informações no corpo da resposta
- PUT
  - Envio de parâmetros via URL e corpo
  - Recebimento de informações no corpo da resposta
- DELETE
  - Envio de parâmetros via URL
  - Recebimento de informações no corpo da resposta
- PATCH
  - Envio de parâmetros via URL e corpo
  - Recebimento de informações no corpo da resposta
- OPTIONS
  - Envio de parâmetros via URL
  - Recebimento de informações no cabeçalho da resposta
- HEAD
  - Envio de parâmetros via URL
  - Recebimento de informações no cabeçalho da resposta

#### 🔷 Requisição - 3 partes

#### ✔️ URL / Endpoint

> ex: https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias?_offset=50&_limit=25

#### ✔️ Cabeçalho / Head de Requisição

- Host: api.sistemanoticias.com.br
- accept: application/json
- X-Acces-Token: xxxxxxxxxx
- x-api-Key: xxxxxxxxxx
- Content-Type: application/json
- ...

#### ✔️ Corpo da Requisição

```
{
  "titulo": "Bets TV show of all time",
  "conteudo": "It's Supernatural series..."
}
```

#### 🔷 Resposta - 2 partes

#### ✔️ Cabeçalho / Head de Resposta

- HTTP 401
- date: Sat, 22 May
- content-type: application/json
- content-length: 26
- x-amzn
- acess-control
- ...

#### ✔️ Corpo da Resposta

```
{
  "id": 1,
  "titulo": "Bets TV show of all time",
  "conteudo": "It's Supernatural series..."
},
{
  "id": 2,
  "titulo": "Better movie of all time",
  "conteudo": "It's Star Wars..."
}
```

</details>

<details>

<summary>Verbos no RESTful</summary>

#### 🔷 Utilidade dos Verbos

#### ✔️ GET

Método de consulta de registros, utilizado para buscar informações.

#### ✔️ POST

Método para criação de registro, utilizado para enviar informações.

#### ✔️ PUT

Método para atualização completa de registro, utilizado para enviar informações.

#### ✔️ DELETE

Método para remoção de registro, utilizado para enviar informações.

#### ✔️ PATCH

Método para atualização parcial de registro, utilizado para enviar informações.

#### ✔️ OPTIONS

Método para verificar quais métodos são permitidos, utilizado para buscar informações.

#### ✔️ HEAD

Método para consultar apenas o cabeçalho dos registros, utilizado para buscar informações.

</details>

<details>

<summary>Relação Verbos e Endpoints</summary>

#### ✔️ Endpoint para buscar todas as notícias

```
[GET]https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias
```

#### ✔️ Endpoint para criar uma nova notícia

```
[POST]https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias
```

#### ✔️ Endpoint para atualizar uma notícia

```
[PUT]https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias/12
```

#### ✔️ Endpoint para remover uma nova notícia

```
[DELETE]https://api.sistemanoticias.com.br/news-api/v1/categorias/1/noticias/12
```

</details>

<details>

<summary>Status Code</summary>

#### 🔷 Definição

Padrão de 3 dígitos que indica o resultado da tentativa de tratar a requisição.

São divididos em 4 classes, indentificadas pelo primeiro dígito.

- 1xx - informational
- 2xx - successful
- 3xx - redirection
- 4xx - client error
- 5xx - server error

</details>

<details>

<summary>Documentação | DX </summary>

#### 🔷 Documentação

A documentação de uma API é uma definição do que é e de como se comportam os seu recursos. Nela estão contidas informações como protocolos, endpoints, parâmetros, formato de dados, entre outras coisas.

Sua pricipal utilidade é servir como referência para desenvolvedores que irão implementar integrações com a API e fornecer a eles todas as informações necessárias para esse trabalho. Muitas vezes é gerada antes da implementação da API de fato e serve como "contrato" entre backend e frontend para saberem o que esperar um do outro.

#### ✔️ Informações Essênciais

- Protocolo
- Host
- Recursos
- Métodos
- Formato dos parâmetros
- Formato dos retornos
- Status Code
- Autenticação

#### ✔️ Referências

- [REST API Tutorial](https://restfulapi.net/)
- [Swagger - Boas Práticas](https://swagger.io/resources/articles/best-practices-in-api-design/)
- [MDN HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)

#### 🔷 DX (Developer Experience)

Exemplos:

#### ✔️ Api Developers Portal

- [Mercado Livre](https://developers.mercadolivre.com.br/)

#### ✔️ Documentação Interativa

- [Pagar.me](https://docs.pagar.me/)

#### ✔️ Getting Started

- [Twilio](https://www.twilio.com/pt-br/docs/sms)

#### ✔️ Exemplos de Códigos / SDK

- [Twitter](https://developer.twitter.com/en/docs/tools-and-libraries)

#### ✔️ Sign-Up e Tokens

- [Youtube](https://developers.google.com/youtube)

#### ✔️ Sandbox / Playground

- [Cielo](https://developercielo.github.io/manual/cielo-ecommerce#sandbox-e-ferramentas)

</details>

---

<h3 id="1"> 🔶​ Swagger</h3>

<details>

<summary>Conceito e Definição</summary>

O Swagger é, basicamente, um conjunto de ferramentas que nos ajuda a fazer o design, ou seja, fazer a modelagem, a documentar e até gerar código para desenvolvimento de APIs.

- [Swagger Editor](https://editor.swagger.io/)

#### ✔️ Documentação

- [Swagger Docs](https://swagger.io/docs/specification/about/)

</details>

---

<h3 id="2"> 🔶 Postman</h3>

<details>

<summary>Conceito e Definição</summary>

O Postman é um aplicativo com a função de testar e desenvolver APIs em uma interface bastante simples e intuitiva. Ele nos permite simular requisições HTTP de forma rápida, armazenando-as para que possamos usá-las posteriormente.

Além disso, para cada requisição feita, o Postman analisa as respostas enviadas pela API e as exibe visualmente de forma muito agradável e fácil de entender, o que reduz consideravelmente o tempo necessário para o desenvolvimento e testes de sua aplicação.

</details>

---

<h3 id="3"> 🔶​ Express</h3>

<details>

<summary>Conceito e Definição</summary>

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

#### 🔷 Framework

O Framework é um pacote de códigos prontos que podem ser utilizados no desenvolvimento de sistemas. A proposta de uso dessa ferramenta é aplicar funcionalidades, comandos e estruturas já prontas para garantir qualidade no projeto e produtividade.

#### ✔️ Algumas Funcionalidades do Express

- Tratamento de métodos
- Tratamento de status code
- Protocolo de comunicação
- Funcionalidades de filtro de parâmetros

</details>

---

<h3 id="4"> 🔶​ Hands On</h3>

<details>

<summary>Arquitetura da API</summary>

#### 🔷 Case

Sistema de postagem e leitura de notícias, onde o jornalista posta as notícias em um painel administrativo marcando quais são sua categorias (esportes, notícias, etc.). O leitor por sua vez acessa o site / portal de notícias, seleciona uma categoria e lê as notícias que deseja.

</details>

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---

<!-- <details>

<summary></summary>

</details> -->
