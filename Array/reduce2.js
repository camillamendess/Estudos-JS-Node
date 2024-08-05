// Definindo um array de objetos representando produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
];

// Utilizando o método reduce para calcular o preço total apenas dos produtos com preço maior que R$ 50,00
const precoTotalProdutosCaros = produtos.reduce(function(acumulador, produto) {
    // A função de callback passada para reduce recebe dois parâmetros:
    // 1. O valor acumulado até o momento (acumulador)
    // 2. O objeto atual do array (neste caso, 'produto')

    // Verificando se o preço do produto é maior que R$ 50,00
    if (produto.preco > 50) {
        // Se for, somando o preço do produto ao acumulador
        return acumulador + produto.preco;
    } else {
        // Se não for, retornando o acumulador sem alterações
        return acumulador;
    }
}, 0); // O segundo parâmetro de reduce é o valor inicial do acumulador (0 neste caso)

// Exibindo o preço total dos produtos com preço maior que R$ 50,00 no console
console.log("Preço total dos produtos caros:", precoTotalProdutosCaros); // Saída: 159.98 (59.99 + 99.99)
