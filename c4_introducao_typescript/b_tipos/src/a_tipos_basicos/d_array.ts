const GATOS: string[] = ["lora", "logan", "lebeau"];

function exibiGatos(gatos: string[]) {
  return `Os gatos são: ${gatos.join(", ")}`;
}

console.log(exibiGatos(GATOS));
