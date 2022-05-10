function principal(): void {
  console.log("executando");
}

principal();

function funcaoQueNuncaRetorna(): never {
  while (true) {}
}

funcaoQueNuncaRetorna();
