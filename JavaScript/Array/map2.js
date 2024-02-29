// Definindo um array de objetos representando produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.99 },
    { id: 2, nome: "Calça", preco: 59.99 },
    { id: 3, nome: "Tênis", preco: 99.99 }
];

// Utilizando o método map para extrair apenas os nomes dos produtos
const nomesProdutos = produtos.map(function(produto) {
    // A função de callback passada para map recebe um parâmetro:
    // 1. O objeto atual do array (neste caso, 'produto')

    // Retornando apenas o nome do produto
    return produto.nome;
});

// Exibindo o novo array contendo apenas os nomes dos produtos no console
console.log("Nomes dos produtos:", nomesProdutos);

/* Neste exemplo, o método map() é usado para iterar sobre cada objeto do array produtos. Para cada objeto, a função de callback é chamada, recebendo o objeto atual (produto). Dentro da função de callback, apenas a propriedade nome de cada produto é retornada. O método map() retorna um novo array contendo apenas os nomes dos produtos. No final, exibimos o novo array com os nomes dos produtos no console. */