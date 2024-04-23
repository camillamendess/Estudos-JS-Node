// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

let numeros = [2, 14, 5, 1];

const segundoMaior = (array) => {
  // a função de comparação (a, b) => a - b indica que os elementos devem ser ordenados em ordem crescente.
  let novoArray = array.sort((a, b) => a - b);
  return novoArray[novoArray.length - 2];
};

console.log(segundoMaior(numeros));
console.log(segundoMaior([12, 16, 1, 5, 14]));
console.log(segundoMaior([8, 4, 5, 6]));
