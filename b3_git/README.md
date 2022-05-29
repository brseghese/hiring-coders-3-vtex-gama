# Git

🔙 [Voltar Página Inicial](https://github.com/brseghese/hiring-coders-3-vtex-gama)

### 📚 Material de Apoio

- [Manual de Sobrevivência do Git](https://drive.google.com/file/d/1PhH6-s7IjDvmKwUB7oiFvK4MEA9loSlA/view)
- [Git e Terminal](https://drive.google.com/file/d/1MUyj7e9VJtrY77B3D8xkhzS4dQq7mqLG/view)

---

### Git

Software de versionamento de códigos.

### Branch & Commit

**Branch** é um linha cronológica com pontos que representam alterações (nova versão).

**Commit** é cada ponto de alteração.

A linha cronológica principal é a **Main** e essa que irá para produção final.

Podemos criar outras linhas cronológicas **Branch**, como por exemplo: por funcionalidades, por integrantes, das funções que estão sendo testadas/desenvolvidas, etc...

Podemos atribuir todas essas outras **Branch** na principal e essa junção entre as linhas cronológicas chama-se **Merge**.

O conjunto de linhas cronológicas **Branch** é o que chamamos de **Repositório** que é o nosso projeto.

### Instalação e Comandos

[Git Download](https://git-scm.com/downloads)

**Git Bash** é um terminal.

Comandos terminal:

- pwd -> exibe o local aberto
- cd -> navega entre pastas
- ls -> lista arquivos e pastas
- mkdir -> cria uma pasta nova
- touch -> cria um arquivo novo

Comandos git:

- git init -> inicializa um repositório local com a linha Main
- git config -> configurar o usuário
- git status -> mostra o estado atual do repositório
- git add (nome do arquivo) -> adiciona o arquivo no próximo ponto (commit)
- git commit -m -> marca o ponto e descreve a alteração feita no projeto
- git restore (nome do arquivo) -> restaura o último commit
- git remote add origin (link do repositório remoto) -> conecta o repositório local com o repositório remoto
- git remote -> confirma a conexão
- git push -u origin main -> envia o conteúdo do repositório local para o repositório remoto

O -u usa-se somente no primeiro push.<br>
O origin é o repositório remoto.<br>
O main é o nome da branch.

### Branch

Criando uma nova branch e subindo para o remoto.

- git checkout -b (nome da branch)
- git add .
- git commit -m
- git push origin (nome da branch)

### Merge

O Merge faz a junção do main com a branch.

Fazendo a junção e subindo para o remoto.

- git checkout main -> volta para o main
- git merge (nome da branch) -> faz a junção
- git fetch -> verifica se a branch está ok

O comando git fetch baixa todos os commits do repositório remoto sem afetar o seu código local.

- git checkout (nome da branch) -> volta para o branch
- git merge main -> faz a junção na principal
- git push -u origin main

No main fica o que já está certo, nas branch criamos novas funcionalidades e estando tudo certo juntamos com a main.

### Fork

**Fork** cria cópia de repositório de terceiro para minha conta.

Normalmente utilizado para fazer teste de desafios ou utilizar um projeto como base.

### Pull Request

É uma requisição para poder fazer atualização em repositório de outros.

Muito comum em projetos Open Source.

### Desafio

Segue o passo a passo:

Fazer um **fork** no repositório [Desafio Gama](https://github.com/jcbombardelli/gama-no-pullrequest)🔗

**Clonar** o repositório do desafio.

Abrir o <b>git bash</b> na pasta que deseja clonar e dar o seguinte comando:

- git clone (url do repositório)
- cd (nome da pasta) -> entrar
- Alterar o readme.md -> qq alteração no .txt
- git add .
- git commit -m 'alterando o readme.md'
- git push -u origin master (o repositório clonado está como master)
- Ir no GitHub (no repositório que foi feito a contribuição) clicar em **Contribute**
- Clicar em <b>Open pull request</b> -> exibe as mudanças e envia a solicitação
- Escreva as alterações que foram feitas e clique em <b>Create pull request</b>

<b>Concluído com Sucesso!!!</b>

### GitHub Pages

Publicando o projeto do repositório:

- settings
- pages
- source -> selecionar a branch que deseja publicar
- save

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---
