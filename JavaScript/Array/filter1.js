// Definindo um array de números
const numeros = [1, 2, 3, 4, 5];

// Utilizando o método filter para filtrar apenas os números pares do array
const numerosPares = numeros.filter(function(numero) {
    // A função de callback passada para filter recebe um parâmetro:
    // 1. O valor do elemento atual (neste caso, 'numero')

    // Verificando se o número é par (resto da divisão por 2 é igual a 0)
    return numero % 2 === 0;
});

// Exibindo o novo array contendo apenas os números pares no console
console.log("Números originais:", numeros); // Saída: [1, 2, 3, 4, 5]
console.log("Números pares:", numerosPares); // Saída: [2, 4]
s