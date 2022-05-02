# Boas Práticas 💪

🔙 [Voltar Página Inicial](https://github.com/brseghese/vtex-hiring-coders-3)

<h3>📚 Material de Apoio</h3>

- [PDF](https://drive.google.com/file/d/1-dTqNpLFhpF0y2RboIhAB-9cIvimk4iI/view)

---

## Padrões

<ol>
<li>Block__Element--Modifier (BEM)</li>
<li>Design System</li>
<li>Storybook</li>
<li>Micro Frontends</li>
<li>Model View Controller (MVC)</li>
<li>Model View ViewModel (MVVM)</li>
<li>Design Patterns: Singleton, Strategy e Adapter</li>
</ol>

### 📝​ Resumo

### Block\_\_Element--Modifier (BEM)

Melhora a organização do CSS aplicando padrão na nomenclatura das classes.

```
<ul class="list"> // Bloco
  <li class="list__item"></li> // Elemento
</ul>

<button class="button button--blue"></button> // Modificador
```

### Design System

É um conjunto de padrões de designs / componentes pre-estabelecidos e consensuais com a finalidade de reutilização.

### Storybook

É uma ferramenta que prepara o ambiente de desenvolvimento de componentes.

### Micro Frontends

O frontend como micro serviços, é a independência de tecnologias. Um software com várias stacks / frameworks.

### Model View Controller (MVC)

É um padrão de projeto que divide os elementos da aplicação em 3 camadas:

- Modelo: recebe, trata e valida todos os dados
- Visão: interação do usuário
- Controle: recebe da visão e envia para o modelo

### Model View ViewModel (MVVM)

É semelhante ao MVC, mas é diferente.

A View tem responsabilidade de definir só a aparência que o usuário verá na tela.

A ViewModel é uma lógica de apresentação, ou seja, ela é uma classe (não visual).

O Model tem a regra do négocio.

Nesse padrão não há necessariamente uma referenciação entre eles.

### Design Patterns

São divididos em 3 categorias:

Singleton: padrão do tipo CREATIONAL (criação) que garante que exista apenas uma instância de uma classe.

Strategy: padrão do tipo BEHAVIORAL (comportamental) que garante a separação de responsabilidades e reutilização das funções.

Adapter: padrão do tipo STRUCTURAL (estrutural) que expande a classe ou objeto com herança.
Muito ulilizada com integrações de serviços de terceiros.

---

### 🔗​ Linkes Úteis

[Get BEM](http://getbem.com/) <br>
[Storybook](https://storybook.js.org/docs/react/get-started/install) <br>
[single-spa](https://single-spa.js.org/)
