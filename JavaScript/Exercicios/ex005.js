// Desenvolva uma funçao que receba uma string como parametro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

function removerVogais(str) {
  // Utiliza o método replace() com uma expressão regular que corresponde a vogais
  // e substitui todas as vogais encontradas por uma string vazia
  return str.replace(/[aeiouAEIOU]/g, "");
}

// Exemplo de uso:
const stringOriginal = "Olá, mundo!";
const stringSemVogais = removerVogais(stringOriginal);
console.log(stringSemVogais);
console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));
