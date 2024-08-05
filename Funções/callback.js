// Definindo a função 'filtrarNumerosPares' que recebe um array de números e uma função de callback
const filtrarNumerosPares = (numeros, callback) => {
    // Filtrando os números do array com base na função de callback
    const numerosFiltrados = numeros.filter(callback);

    // Retornando o array resultante após a filtragem
    return numerosFiltrados;
};

// Definindo uma função de callback que verifica se um número é par
const callbackNumerosPares = numero => numero % 2 === 0;

// Definindo um array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chamando a função 'filtrarNumerosPares' com o array de números e a função de callback
const numerosPares = filtrarNumerosPares(numeros, callbackNumerosPares);

// Exibindo o array resultante contendo apenas os números pares
console.log("Números pares:", numerosPares);
