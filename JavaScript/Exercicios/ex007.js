// Desenvolva uma função que recebe um caractere e uma string como parametros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maius e minus.

function contarCaractere(caractere, string) {
  // Divide a string em um array de caracteres
  const arrayDeCaracteres = string.split("");

  // Filtra os caracteres que são iguais ao caractere alvo
  const caracteresIguais = arrayDeCaracteres.filter(function (caract) {
    const expressãoRegular = new RegExp(caractere, "i");
    return expressãoRegular.test(caract);
  });

  // Retorna o comprimento do array resultante, que é a quantidade de vezes que o caractere se repete
  return caracteresIguais.length;
}

// Exemplo de uso:
console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
