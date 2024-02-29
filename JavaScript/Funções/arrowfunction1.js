// Definindo um array de objetos representando produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
];

// Utilizando arrow function para definir a função de filtro
const filtrarProdutosCaros = (array) => {
    // Filtrando apenas os produtos com preço maior que R$ 50,00 e mapeando apenas os nomes dos produtos
    return array.filter(produto => produto.preco > 50).map(produto => produto.nome);
};

// Chamando a função de filtro e armazenando o resultado em uma variável
const nomesProdutosCaros = filtrarProdutosCaros(produtos);

// Exibindo os nomes dos produtos com preço maior que R$ 50,00 no console
console.log("Nomes dos produtos caros:", nomesProdutosCaros); // Saída: ["Calça", "Tênis"]
