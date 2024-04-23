// Elabore uma função que recebe dois parametros: o primeiro é um array de numeros e o segundo é um numero que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parametro.

const filtrarPorQuantidadeDeDigitos = (array, quantidadeDigitos) => {
  const novoArray = array.filter(function (numero) {
    let numeroTamanho = numero.toString().length;
    if (numeroTamanho === quantidadeDigitos) {
      return numero;
    }
  });
  return novoArray;
};

// Ou eu poderia fazer mais simplificada
const filtrarPorQuantidadeDeDigitos1 = (array, quantidadeDigitos) => {
  return array.filter(function (numero) {
    return numero.toString().length === quantidadeDigitos;
  });
};

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));
