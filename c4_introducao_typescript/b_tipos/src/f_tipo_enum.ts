enum Permissoes {
  admin,
  editor,
  comum,
}

enum Cores {
  red = "#ff0000",
  black = "000",
}

const USUARIO = {
  nivel: Permissoes.admin,
  perfil: Cores.red,
};

console.log(USUARIO); // { nivel: 0, perfil: '#ff0000' }
