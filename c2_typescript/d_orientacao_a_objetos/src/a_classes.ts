// classes e funções

// public
class Usuario {
  public nome; // modificadores de acesso
  public idade;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Jogador extends Usuario {
  public jogo;

  constructor(nome: string, idade: number, jogo: string) {
    super(nome, idade);
    this.jogo = jogo;
  }

  qualJogoAtual() {
    return this.jogo;
  }

  // static
  static diaDoJogo() {
    return Date();
  }
}

const jogador = new Jogador("Bruno", 41, "Guns");
console.log(`Estou jogando no momento ${jogador.qualJogoAtual()}`);
console.log(`O jogo é dia ${Jogador.diaDoJogo()}`); // static
console.log("");

// protected e private

class Jogo {
  protected nome; // acesso na classe e subclasse

  constructor(nome: string) {
    this.nome = nome;
  }

  nomeNaClassePai() {
    return this.nome;
  }
}

class JogoComDescricao extends Jogo {
  private descricao;

  constructor(nome: string, descricao: string) {
    super(nome);

    this.descricao = descricao;
  }

  nomeNaClasseFilho() {
    return this.nome; // protected na classe pai
  }

  exibirDescricao() {
    return this.descricao; // private
  }
}

// jogo1.nome = "Shadow Dog"; nome está como private na classe pai
// console.log(jogo1.nome); nome está como private na classe pai

const jogo1 = new Jogo("Worms");
console.log(`O nome do jogo é ${jogo1.nomeNaClassePai()}`);
const jogo2 = new JogoComDescricao("Guns2", "tiro pra todo lado!");
console.log(
  `O nome do jogo é ${jogo2.nomeNaClasseFilho()} e é ${jogo2.exibirDescricao()}`
);
console.log("");

// interface e implements

interface IJogo2 {
  nome: string;
  nomeNaClassePai(): string;
}

class Jogo2 implements IJogo2 {
  public nome;

  constructor(nome: string) {
    this.nome = nome;
  }

  nomeNaClassePai() {
    return this.nome;
  }
}

interface IJogoComDescricao2 {
  nome: string;
  descricao: string;
  nomeNaClasseFilho(): string;
}

class JogoComDescricao2 extends Jogo2 implements IJogoComDescricao2 {
  public descricao;

  constructor(nome: string, descricao: string) {
    super(nome);

    this.descricao = descricao;
  }

  nomeNaClasseFilho() {
    return this.nome;
  }

  exibirDescricao() {
    return this.descricao;
  }
}

const objI: IJogo2 = {
  nome: "nome do jogo",
  nomeNaClassePai() {
    return "xxxx";
  },
};

type TJogo2 = {
  nome: string;
  nomeNaClassePai(): string;
};

const objT: TJogo2 = {
  nome: "nome do jogo",
  nomeNaClassePai() {
    return "xxxx";
  },
};

// type assertions

type Jogo3 = {
  nome: string;
  descricao: string;
};

let jogo = {} as Jogo3;
jogo.nome = "Guns";
jogo.descricao = "Tiro pra todo lado!";

let jogoAssertions = <Jogo3>{};
jogoAssertions.nome = "Guns2";
jogoAssertions.descricao = "Tiro pra todo lado!";
