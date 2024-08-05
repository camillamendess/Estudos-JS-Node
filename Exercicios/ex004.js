// Desenvolva uma função que recebe um objeto como parametro e retorne um outro objeto que corresponde ao objeto recebido como parametro, porém com as posições das chaves e valores invertidas.

function inverterObjeto(objeto) {
  const objetoInvertido = {}; // Criação de um objeto vazio para armazenar as chaves e valores invertidos

  for (const chave in objeto) {
    // Loop for...in para iterar sobre as chaves do objeto original

    if (objeto.hasOwnProperty(chave)) {
      // Verifica se a chave pertence diretamente ao objeto original

      const valor = objeto[chave];
      // Obtém o valor correspondente à chave atual do objeto original

      objetoInvertido[valor] = chave;
      // Atribui uma entrada ao objeto invertido, onde a chave é o valor original e o valor é a chave original
    }
  }

  return objetoInvertido;
  // Retorna o objeto invertido após concluir o loop
}

// Exemplo de uso da função inverterObjeto:
const objetoOriginal = {
  a: "1",
  b: "2",
  c: "3",
};

const objetoInvertido = inverterObjeto(objetoOriginal);

console.log(objetoOriginal);
console.log(objetoInvertido);
