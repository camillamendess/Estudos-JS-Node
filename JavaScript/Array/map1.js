// Definindo um array de números
const numeros = [1, 2, 3, 4, 5];

// Utilizando o método map para dobrar cada número do array
const numerosDobrados = numeros.map(function(numero) {
    // A função de callback passada para map recebe um parâmetro:
    // 1. O valor do elemento atual (neste caso, 'numero')

    // Dobrando o valor do número e retornando o resultado
    return numero * 2;
});

// Exibindo o novo array com os números dobrados no console
console.log("Números originais:", numeros); // Saída: [1, 2, 3, 4, 5]
console.log("Números dobrados:", numerosDobrados); // Saída: [2, 4, 6, 8, 10]
