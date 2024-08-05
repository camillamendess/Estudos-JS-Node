// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.

// Escreva uma função que recebe como primeiro parametro uma palavra e, como segundo parametro, um array de strings. A função deverá filtrar as palavras do array que contem nelas a string do primeiro parametro.

// Função usando o includes
const buscarPalavrasSemelhantes1 = (palavra, array) => {
  const novoArray = array.filter(function (elemento) {
    if (elemento.includes(palavra)) {
      return elemento;
    }
  });

  return novoArray;
};

// Função usando expressão regular
const buscarPalavrasSemelhantes = (palavra, array) => {
  const expressaoRegular = new RegExp(palavra, "i");

  const novoArray = array.filter(function (elemento) {
    // Testa se o elemento atual corresponde à expressaoRegular
    return expressaoRegular.test(elemento);
  });

  return novoArray;
};

console.log(
  buscarPalavrasSemelhantes("pro", ["Programação", "mobile", "professional"])
);
