// Definindo um array de números
const numeros = [1, 2, 3, 4, 5];

// Usando o método forEach para iterar sobre cada elemento do array
numeros.forEach(function(numero, indice) {
    // A função de callback passada para forEach recebe dois parâmetros:
    // 1. O valor do elemento atual (neste caso, 'numero')
    // 2. O índice do elemento atual (neste caso, 'indice')

    // Exibindo o valor do elemento e seu índice no console
    console.log(`Número: ${numero}, Índice: ${indice}`);
});

// Saída no console:
// Número: 1, Índice: 0
// Número: 2, Índice: 1
// Número: 3, Índice: 2
// Número: 4, Índice: 3
// Número: 5, Índice: 4
