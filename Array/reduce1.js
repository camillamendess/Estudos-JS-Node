// Definindo um array de números
const numeros = [1, 2, 3, 4, 5];

// Utilizando o método reduce para calcular a soma de todos os números do array
const soma = numeros.reduce(function(acumulador, numero) {
    // A função de callback passada para reduce recebe dois parâmetros:
    // 1. O valor acumulado até o momento (acumulador)
    // 2. O valor do elemento atual (neste caso, 'numero')

    // Somando o valor acumulado com o valor do número atual
    return acumulador + numero;
}, 0); // O segundo parâmetro de reduce é o valor inicial do acumulador (0 neste caso)

// Exibindo a soma de todos os números no console
console.log("Soma de todos os números:", soma); // Saída: 15 (1 + 2 + 3 + 4 + 5)
