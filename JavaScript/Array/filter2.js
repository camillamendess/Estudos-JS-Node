// Definindo um array de objetos representando produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
];

// Utilizando o método filter para filtrar apenas os produtos com preço maior que R$ 50,00
const produtosCaros = produtos.filter(function(produto) {
    // A função de callback passada para filter recebe um parâmetro:
    // 1. O objeto atual do array (neste caso, 'produto')

    // Verificando se o preço do produto é maior que R$ 50,00
    return produto.preco > 50;
});

// Exibindo o novo array contendo apenas os produtos com preço maior que R$ 50,00 no console
console.log("Produtos originais:", produtos); 
// Saída: Array original com todos os produtos
console.log("Produtos caros:", produtosCaros); 
// Saída: Array filtrado contendo apenas os produtos com preço maior que R$ 50,00
